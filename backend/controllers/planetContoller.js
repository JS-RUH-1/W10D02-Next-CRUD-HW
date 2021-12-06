const Planet = require("../models/planet");

const handleErrors = (err) => {
  console.log(err.message, err.code);
  const errors = { PlanetName: "", NumberOfMoon: "", LengthOfDay: "" };

  if (err.code === 11000) {
      errors.PlanetName = 'that planet already exists';
    }

  if (err.message.includes("planet validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }
  return errors.PlanetName == "" && errors.NumberOfMoon=="" && errors.LengthOfDay=="" ? "Incorrect Planet ID":errors
};

module.exports.get_all_planets = async (req,res) => {
    res.send(await Planet.find({}).then((data)=>data).catch((err)=>handleErrors(err)))
}
module.exports.post_multiple_planets = async (req,res) => {
  res.send(await Planet.find({}).then((data)=>data).catch((err)=>handleErrors(err)))
}

module.exports.get_a_planet = async (req,res) => {
  try{
    const tempPlanet = await Planet.findById(req.params.id)
    res.status(200).send(tempPlanet)
  } catch(err){
    const errors = handleErrors(err);
    res.status(400).json({errors})
  }
}

module.exports.post_a_planet = async (req,res) => {
  res.send(await Planet.create({
    PlanetName:req.body.PlanetName,
    NumberOfMoon:req.body.NumberOfMoon,
    LengthOfDay:req.body.LengthOfDay
  }).then((data)=>data).catch((err)=>handleErrors(err)))
}
module.exports.edit_a_planet = async (req,res) => {
  let operation = {
    PlanetName:"", 
    NumberOfMoon:"", 
    LengthOfDay:""
  }
  req.body.PlanetName!=undefined ? operation.PlanetName=req.body.PlanetName : delete operation.PlanetName
  req.body.NumberOfMoon!=undefined ? operation.NumberOfMoon=req.body.NumberOfMoon : delete operation.NumberOfMoon
  req.body.LengthOfDay!=undefined ? operation.LengthOfDay=req.body.LengthOfDay : delete operation.LengthOfDay
  res.send(await Planet.updateOne({_id:req.params.id},{ $set: operation }).then((data)=>'updated successfully!').catch((err)=>handleErrors(err)))
}
module.exports.delete_a_planet = async (req,res) => {
  res.send(await Planet.deleteOne({_id:req.params.id}).then((data)=>'Deleted successfully!').catch((err)=>handleErrors(err)))
}
