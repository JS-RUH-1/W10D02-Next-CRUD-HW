import dbConnect from "../../../utils/dbConnect";
import Planet from "../../../models/Planets";

dbConnect();

export default async (req, res) => {
    const {
        query: { id },
        method 
    } = req;

    switch (method) {
        case "GET":
            try {
                const planets = await Planet.findById(id);

                if (!planets){
                   return res.status(400).json({ success: false })
                }

                res.status(200).json({ success: true, data: planets })
  
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break;

            case "PUT":
                try {
                    const planets = await Planet.findByIdAndUpdate(id, req.body, 
                        {
                        new: true,
                        runValidators: true
                       });
    
                    if (!planets){
                       return res.status(400).json({ success: false })
                    }
                    
                    res.status(200).json({ success: true, data: planets })
      
                } catch (error) {
                    res.status(400).json({ success: false })
                }
                break;

                case "DELETE":
                    try {
                        const deletePlanets = await Planet.deleteOne({_id: id});
        
                        if (!deletePlanets){
                           return res.status(400).json({ success: false })
                        }
                        const planets = await Planet.find({});

                        res.status(200).json({ success: true, data: planets })
          
                    } catch (error) {
                        res.status(400).json({ success: false })
                    }
                    break;
        default:
            res.status(400).json({ success: false })
            break;
    }



}