import dbConnect from "../../utils/dbConnect";
import Planets from "../../models/Planets";

dbConnect();

export default async (req, res) => {
  const { method } = req;

  switch ( method ) {
    case "GET":
      try {
        const planets = await Planets.find({});

        res.status(200).json({ success: true, data: planets })
    } catch (error) {
        res.status(400).json({ success: false });
    }
    break;


    case'POST':
    try{
      
      const plant = await Planets.create(req.body);
      res.status(201).json({success:true,data:plant})
    }catch(err){
      res.status(400).json({success:false});
    }

    break;



    default:
      res.status(400).json({ sucess: false });
      break;
  }
};
