
import  planet from"../../model/planetSchema"

export default  async (req, res) => {
  
    //get all plant
    if (req.method === 'GET') {
      const allPlantes = await planet.find({})
      res.status(200).json(allPlantes)
    
    }
    //post new  plant  
    if (req.method === "POST") {

    const postPlant = await planet.create(req.body)
    return res.status(200).json(postPlant);
    }

  
};

