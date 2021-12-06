// base64

import planet from "../../../models/planet";

export default async function handler(req, res) {
  if (req.method === 'POST')
    return res.status(200).json((await planet.create(JSON.parse(req.body))));
   
  res.status(200).json((await planet.find({})))
}
