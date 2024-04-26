const mongoose = require("mongoose");

const cardSchema = new mongoose.Schema({
  property: String,
  num_bedrooms: Number,
  num_bathrooms: Number,
  parking_spaces: Number,
  carpet_area_sqft: Number,
  address: String,
  current_price: Number,
  apartment_id: Number,
});

const Cardinfo = mongoose.model("cardinfo", cardSchema);

module.exports = Cardinfo;
