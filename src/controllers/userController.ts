import { Request, Response } from 'express'
import { User } from '../models/User'

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.find()
    res.json(users)
  } catch (error) {
    res.status(500).json({ error })
  }
}

export const createUser = async (req: Request, res: Response) => {
  const { username, email, password, gender } = req.body
  try {
    const newUser = new User({ username, email, password, gender })
    await newUser.save()
    res.status(201).json(newUser)
  } catch (error) {
    res.status(400).json({ error })
  }
}
