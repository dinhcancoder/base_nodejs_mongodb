import express, { Application } from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRoutes from '../routes/userRoutes'
import productRoutes from '../routes/productRoutes'

dotenv.config()

const app: Application = express()
app.use(express.json())

// Routes
app.use('/api/v1', userRoutes)
app.use('/api/v1', productRoutes)

// Kết nối tới MongoDB
mongoose
  .connect(process.env.MONGO_URI || '')
  .then(() => {
    console.log('Connected to MongoDB')
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error)
  })

export default app
