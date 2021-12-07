import connectDB from '../../../connection/db_connection'
import Planet from '../../../models/PlanetScame'



const handler = async (req, res) => {
    if (req.method === 'GET') {
        try {
            const allPlantes = await Planet.find({})

            res.status(200).json({ success: true, data: allPlantes })
        } catch (err) {
            res.status(400).json({ success: false })
        }
    }
    else if (req.method === "POST") {
        try {
            const newPlanet = await Planet.create(req.body)

            res.status(200).json({ success: true, data: newPlanet })
        } catch (err) {
            res.status(400).json({ success: false })
        }
    }
};

export default connectDB(handler);

// connectDB()

// export default async (req, res) => {
//     const {method} = req;

//     switch(method) {
//         case 'GET':
//             try {
//                 const allPlantes = await Planet.find({})

//                 res.status(200).json({success: true, data: allPlantes})
//             } catch (err) {
//                 res.status(400).json({success: false})
//             }
//             break;

//         case 'POST':
//             try {
//                 const newPlanet = await Planet.create(req.body)

//                 res.status(200).json({success: true, data: newPlanet})
//             } catch (err) {
//                 res.status(400).json({success: false})
//             }
//             break;

//         default:
//             res.status(400).json({success: false})
//             break;
//     }
// }