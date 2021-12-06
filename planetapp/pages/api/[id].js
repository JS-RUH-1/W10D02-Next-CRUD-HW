import dbConnect from "../../../utils/dbConnect"
import Planet from '../../models/Planet'

dbConnect();

export default async (req , res )=>{
    const {

        query: {id},
        method
    } = req ;
    switch(method){
        case "GET":
            try{
                const planet = await Planet.findById(id)
                if (!planet){
                     res.status(400).json({ success: false});
                    }
                    res.status(200).json({success:true , data: planet})

        
              }catch (error){
                res.status(400).json({ success: false});
            }
            break;
            case "PUT":
                try{
                    const planet = await Planet.findByIdAndUpdate(id, req.body,{
                        new: true,
                        runValidators: true,
                    });
                    if (!planet){
                        res.status(400).json({ success: false});
                       }
                    res.status(200).json({success:true , data: planet})
                }catch (error){
                    res.status(400).json({ success: false});
                }
                break;

                case "DELETE":
                    try{
                        const DeletedNote = await Planet.deleteOne({_id: id})
                        if (!DeletedNote){
                          return   res.status(400).json({ success: false});
                            }
                            res.status(200).json({success:true , data: {}})
        
                
                      }catch (error){
                        res.status(400).json({ success: false});
                    }
                    break;
                    default:
             res.status(400).json({ success: false});
             break;


    }
}
