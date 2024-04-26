const express = require("express");
const router = express.Router();
const Cardinfo = require("./db/cardmodel");
const Properties = require("./db/propertymodel");

router.get("/cards", async (req, res) => {
  try {
    const cards = await Cardinfo.find();
    console.log("Retrieved card data:", cards);
    res.json(cards);
  } catch (error) {
    console.error("Error fetching card data:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.get("/properties", async (req, res) => {
  try {
    const properties = await Properties.find();
    res.json(properties);
  } catch (error) {
    console.error("Error fetching property data:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
