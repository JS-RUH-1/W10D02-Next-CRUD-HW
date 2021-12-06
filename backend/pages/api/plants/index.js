import dbConnect from '../../../utils/dbConnect';
import Plant from '../../../models/Plant';


dbConnect();

export default async (req,res)=>{
    const {method} = req;

    switch(method){

        case 'GET':
            try{
                const plants = await Plant.find({});
                res.status(200).json({success:true ,data:plants});

            }catch(error){
                res.status(500).json({success:false })
            }
            break;
        
        case 'POST':
            try{
            const plant = await Plant.create(req.body);
            res.status(201).json({success:true ,data:plant})
            }   catch(error){

                res.status(500).json({success:false })
            } break;

            
            default:
                res.status(500).json({success:false })
                break;
    }
}