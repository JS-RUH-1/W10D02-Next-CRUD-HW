import dbConnect from "../../public/Utils/dbConnect";

dbConnect();
export default async (req , res )=>{
    res.json({test : 'test'});
}