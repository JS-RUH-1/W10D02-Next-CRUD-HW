import dbConnect from "../../../utils/dbConnect";

import Planets from "../../../models/Planets";

dbConnect();

export default async (req, res) => {
  const {
    query: { id },
    method,
  } = req;
  switch (method) {
    case "GET":
      try {
        const planet = await Planets.findById(id);
        if (!planet) {
          res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: planet });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "PUT":
      try {
        const planet = await Planets.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        });
        if (!planet) {
          res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: planet });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "DELETE":
      try {
        const deletePlanet = await Planets.deleteOne({ _id: id });
        if (!deletePlanet) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: {} });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};
