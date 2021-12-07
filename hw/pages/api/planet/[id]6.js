import dbConnect from "../../../utils3/dbConnect3";
import planet1 from "../../../modal1/planet1";

dbConnect();

export default async (req, res) =>{
    const {
        query: { id },
        method
    } = req;

    switch (method) {
        case 'GET':
            try {
                const planet = await Planet.findOne({ _id: id });

                if (!planet) {
                    return res.status(400).json({ success: false })
                }

                res.status(200).json({ success: true,  data: planet});
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break;

        case 'PUT':
            try {
                const planet = await Planet.findByIdAndUpdate(id, req.body, {
                    new: true,
                    runValidators: true
                });

                if (!planet) {
                    return res.status(400).json({ success: false });
                }

                res.status(200).json({ success: true, data: planet });
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        case 'DELETE':
            try {
                const deletedPlanet = await Planet.deleteOne({ _id: id });

                if (!deletedPlanet) {
                    return res.status(400).json({ success: false })
                }

                res.status(200).json({ success: true, data: {} });
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break;
        default:
            res.status(400).json({ success: false })
            break;
    }
} // app.ja step 7