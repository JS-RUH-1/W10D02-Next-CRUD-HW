import planet from "../../../models/planet"

export default async function handler(req, res) {
    if (req.method === 'GET') 
         return res.status(200).json((await planet.findOne({_id: req.query.id})))
    if (req.method === 'PUT') 
         return res.status(200).json((await planet.updateOne({_id: req.query.id},{$set: req.body})))

}
