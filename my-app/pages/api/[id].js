import dbConnect from "../../utils/dbConnect";
import Planets from "../../models/Planets";

dbConnect();

export default async (req, res) => {
  const {
    query: { id },
    method,
  } = req;

  switch (method) {
    case "GET":
      try {
        const planetsID = await Planets.findById(id);
        res.status(201).json({ success: true, data: planetsID });
      } catch (err) {
        res.status(400).json({ success: false });
      }
      break;

    case "DELETE":
      try {
        const plant = await Planets.deleteOne({ _id: id });
        res.status(201).json({ success: true, data: plant });
      } catch (err) {
        res.status(400).json({ success: false });
      }
      break;

    case "PUT":
      try {
        const plant = await Planets.findByIdAndUpdate({ _id: id }, req.body);
        res.status(201).json({ success: true, data: plant });
      } catch (err) {
        res.status(400).json({ success: false });
      }

    default:
      res.status(400).json({ success: false });
      break;
  }
};
