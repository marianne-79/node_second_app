const express = require('express')
const router = express.Router()

const db = require('../models')
const pets = db.pets

// fetch all pets
router.route('/pets')
  .get(async (req, res) => {
    console.log('fetching all pets from DB')

    const cursor = await pets.find()
    res.send(cursor)
  })

// Add new pet
router.route('/pets/new')
  .post(async (req, res) => {
    console.log('adding new pet')
    let data = req.body

    // Create a new pet
    // eslint-disable-next-line new-cap
    const pet = new pets(data)

    // save pet to database
    await pet.save((err) => {
      if (err) {
        console.log('something went wrong when saving')
        res.sendStatus(400)
      }
    })
    // Respond with token
    const token = 'success'
    res.status(200).json({ token })
    console.log('miaow')
  })

// delete any pet with given name
router.route('/pets/delete')
  .delete(async (req, res) => {
    // let query = { 'name': req.body.name }

    // delete pet
    const result = await pets.deleteOne({ name: req.body.name })
    console.log(result.deletedCount + ' document(s) deleted')

    // Respond with token
    const deleteToken = 'success'
    res.status(200).json({ deleteToken })
  })

module.exports = router