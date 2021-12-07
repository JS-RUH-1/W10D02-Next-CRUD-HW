//denamic route 

import dbConnect from "../../../public/Utils/dbConnect";
import Planets from "../../../models/Planets"

dbConnect();

export default async (req , res) => {
    const {
        query : {id},
        method 

    } = req ;

    switch(method){
        case 'GET':
            try {
                const planet = await Planets.findById(id);
                if (!planet){
                    return res.status(400).json({succsess:false});
                }
                res.status(200).json({succsess:true , data:planet});
            }catch(error){
                return res.status(400).json({succsess:false});

            }
            break;
            case 'PUT' :
                try {
                    
                    const planet = await Planets.findByIdAndUpdate(id , req.body ,{
                      new : true ,   
                      runValidators : true  
                   
                    } );

                    if (!planet){
                        return res.status(400).json({succsess:false});
                    }
                    const NewPlanet = await Planets.find({})
                    res.status(200).json({succsess:true , data:NewPlanet});

                }catch(error){
                    return res.status(400).json({succsess:false});

                }
                break;
                case 'DELETE' :
                    try {
                        const delet = await Planets.deleteOne({_id:id });
                        if (!delet){
                            return res.status(400).json({succsess:false})
                        }

                        const NewPlanet = await Planets.find({})
                        res.status(200).json({succsess:true , data:NewPlanet});
                        
                    }catch(error){

                        res.status(400).json({succsess:false});
                    }
                    break;
                    default:
                        res.status(400).json({succsess:false});
                        break;

    }
}