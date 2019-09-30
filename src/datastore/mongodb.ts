import mongoose from 'mongoose'

export const connectDB = async (): mongoose => {
  await mongoose.connect(process.env.MONGODB_ATLAS_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  return mongoose
}
