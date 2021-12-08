import  planet from "../../model/planetSchema"

export default async (req, res) => {
  const {
    query: { id },
    method,
  } = req;

  if (method === "GET") {
    const plant = await planet.findById(id);
    console.log("this is my plant ",plant)
    if (!plant) return res.status(200).json("not found");
    return res.status(200).json(plant);
  }
  if (method === "PUT") {
    const plant = await planet.findByIdAndUpdate(id);
    if (!plant) return res.status(200).json("not found");
    return res.status(200).json(plant);
  }

  if (method === "DELETE") {

    const plant = await planet.findByIdAndRemove(id);
    console.log("this my id",plant)
    if (!plant) return res.status(200).json("not found");
    return res.status(200).json(plant);
  }
};
