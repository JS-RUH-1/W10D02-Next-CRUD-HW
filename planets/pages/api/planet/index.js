import dbConnect from "../../../utils/dbConnect";
import Planet from "../../../models/planet";

dbConnect();

export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const planet = await Planet.find({});

        res.status(200).json({ success: true, data: planet });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case "POST":
      try {
        const planet = await Planet.create(req.body);
        res.status(201).json({ success: true, data: planet });
      } catch {
        res.status(400).json({ success: false });
      }
      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
};
