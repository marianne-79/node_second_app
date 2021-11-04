// Create a connection to database
let mongoose = require('mongoose')
const uri = "mongodb+srv://secretevy:822159@cluster0.uwrv0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const db = mongoose.connect(uri)

// create a model
// pet
db.pets = require('./Pet.js')
module.exports = db