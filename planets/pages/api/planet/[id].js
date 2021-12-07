import dbConnect from "../../../utils/dbConnect";
import Planet from "../../../models/planet";

dbConnect();

export default async (req, res) => {
  const {
    query: { id },
    method,
  } = req;

  switch (method) {
    case "GET":
      try {
        const planet = await Planet.findById(id);
        if (!planet) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: planet });
      } catch (error) {
        return res.status(400).json({ success: false });
      }
      break;

    case "PUT":
      try {
        const planet = await Planet.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        });
        if (!planet) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: planet });
      } catch (error) {
        return res.status(400).json({ success: false });
      }

      break;

    case "DELETE":
      try {
        const deletePlanet = await Planet.deleteOne({ _id: id });

        if (!deletePlanet) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: planet });
      } catch (error) {
        return res.status(400).json({ success: false });
      }
      break;

    default:
      return res.status(400).json({ success: false });
      break;
  }
};
