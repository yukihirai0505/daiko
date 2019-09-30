import mongoose from 'mongoose'

const DaikoSchema = mongoose.Schema({
  uid: {
    type: String,
    required: true,
  },
  twitterScreenName: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  place: String,
  imageUrl: {
    type: String,
    required: true,
  },
})

const Daiko = mongoose.models.daiko || mongoose.model('daiko', DaikoSchema)

export const findDaikoById = async id => {
  return Daiko.findById(id)
}

export const createNewDaiko = async ({
  uid,
  twitterScreenName,
  title,
  body,
  place,
  imageUrl,
}) => {
  const daiko = new Daiko({
    uid,
    twitterScreenName,
    title,
    body,
    place,
    imageUrl,
  })
  const response = await daiko.save()
  return response._id
}
