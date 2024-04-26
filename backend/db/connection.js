const mongoose = require("mongoose");

connection = mongoose
  .connect("mongodb://127.0.0.1:27017/RealEstate")
  .then(() => {
    console.log("DB Connected");
  });

module.exports = connection;
