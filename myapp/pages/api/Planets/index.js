import dbConnect from "../../../public/Utils/dbConnect";
import Planets from "../../../models/Planets"

dbConnect();

export default async (req , res) =>{
    const {method}=req;

    switch(method){
        case 'GET':
        try {
            const planets = await Planets.find({});
            res.status(200).json({success :true , data:planets})
        }catch (error){
        res.status(400).json({success:false});
    }
    break;
    case 'POST':
        try{
            const planet = await Planets.create(req.body);
            const planets = await Planets.find({});
            res.status(201).json({success:true  , data:planets})

        }catch(error){
            res.status(400).json({success:false});

        }
        break;

        default:
            res.status(400).json({success:false});
}

}