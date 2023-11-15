const exprees = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = exprees();
const mongoose = require("mongoose");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
require("dotenv").config();
mongoose
  .connect(process.env.DB_URL, {})
  .then(() => {
    console.log("Connected to Database");
  })
  .catch((err) => console.log(err));

const port = process.env.PORT || 80;
app.listen(port, () => {
  console.log(`Server is running on port:${port}`);
});
