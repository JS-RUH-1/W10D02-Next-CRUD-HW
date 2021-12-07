const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Planet = require("../models/Planets").planet;

// get all planets
router.get("/", async (req, res) => {
    Planet.find({},(err, planets) => {
        planets.length ? res.json(planets) : res.status(400).json("No planets found");
    })
});
// get specific planet by name
router.get("/:name", async (req, res) => {
    const name = req.params.name;
    Planet.find({ planetName: { $regex : new RegExp(name, "i") }},(err, planets) => {
        planets.length ? res.json(planets) : res.status(400).json("No planets found");
    })
});

// add new planet
router.post("/", async (req,res) => {
    const planet = req.body
    Planet.create(planet , (err, planet) => {
        err ? res.status(400).send("Failed to add planet") : res.status(200).json(planet) ;
    })
})

// delete planet
router.delete("/:name", async (req,res) =>{
    const planet = req.params.name;
    Planet.deleteOne( { planetName: { $regex : new RegExp(planet, "i") } } , (err, planet) => {
        err ? res.status(400).send("Failed to delete planet") : res.status(200).json(planet);
    })
})

module.exports = router;
