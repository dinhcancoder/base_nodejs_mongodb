import { Request, Response } from 'express'
import { Product } from '../models/Product'

export const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await Product.find()
    res.json({
      message: 'Danh sách sản phẩm',
      products,
    })
  } catch (error) {
    res.status(500).json({ error })
  }
}

export const createProduct = async (req: Request, res: Response) => {
  const { name, price, discount } = req.body
  try {
    const newProduct = new Product({ name, price, discount })
    await newProduct.save()
    res.status(201).json({
      message: 'Thêm mới sản phẩm thành công!',
      product: newProduct,
    })
  } catch (error) {
    res.status(400).json({ error })
  }
}
