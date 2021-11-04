const express     = require("express");
const bodyParser  = require("body-parser");

const petRoutes = require("./routes/petRoutes");

const app = express();

app.use(bodyParser.json());

app.use('/', petRoutes);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running`);
});