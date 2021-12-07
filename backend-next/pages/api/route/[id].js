import connectDB from '../../../connection/db_connection'
import Planet from '../../../models/PlanetScame'



const handler = async (req, res) => {
    const {
        query: { id },
        method
    } = req;

    switch (method) {
        case 'GET':
            try {
                const getPlanet = await Planet.findOne({ id });
                if (!getPlanet) {
                    return res.status(400).json({ success: false })
                }
                res.status(200).json({ success: true, data: getPlanet });
                
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break;

        case 'PUT':
            try {
                const editPlanet = await Planet.findByIdAndUpdate(id ,{ $set:req.body });
                if (!editPlanet) {
                    return res.status(400).json({ success: false });
                }
                res.status(200).json({ success: true, data: editPlanet });

            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        case 'DELETE':
            try {
                const deletedPlanet = await Planet.deleteOne({ id });
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
};

export default connectDB(handler);