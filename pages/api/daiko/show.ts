import { connectDB } from '../../../src/datastore/mongodb'
import { findDaikoById } from '../../../src/datastore/models/Daiko'

export default async (req, res) => {
  const daikoId = req.query.id
  if (daikoId) {
    await connectDB()
    const daiko = await findDaikoById(daikoId)
    return res.json(daiko)
  }
  return res.json({ messag: 'plz specify id' })
}
