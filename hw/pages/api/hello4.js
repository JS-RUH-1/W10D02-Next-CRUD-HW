// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import dbConnect from "../../utils3/dbConnect3";

dbConnect();

export default async(req,res) =>{
  res.json({name: 'John Doe'});
}
// Go to 5 => pages/api/planet/index.js