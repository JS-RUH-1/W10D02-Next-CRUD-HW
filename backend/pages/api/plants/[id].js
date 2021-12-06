import dbConnect from '../../../utils/dbConnect';
import Plant from '../../../models/Plant';




dbConnect();

export default async (req,res)=>{
    const {
        query:{id},
        method
    }=req;

    switch(method){

        case 'GET':
            try{
                const plant = await Plant.findById(id);  
        if(!plant){
            return res.status(404).json({success:false});
        }
        res.status(200).json({success:true ,data:plant});
            }catch(error){
                res.status(400).json({success: false});
            }
            break;

            case'PUT':
            try{
                const plant = await Plant.findByIdAndUpdate(id,req.body,{
                    new:true,
                    runValidators:true
                });
                if(!plant){
                    return res.status(400).json({success: false});
                }
                res.status(200).json({success: true,data:plant})

            }catch(error){
                res.status(400).json({success: false});
            }
            break;

            case 'DELETE':
                try{
                    const deletePlant = await Plant.deleteOne({_id:id});
                    if(!deletePlant){
                        return res.status(400).json({success: false});
                    }
                    res.status(200).json({success: true,data:{}})
   
                }catch(error){
                    res.status(400).json({success: false});
                }
                break;

                default:
                    res.status(400).json({success: false});
                    break;
    }
}