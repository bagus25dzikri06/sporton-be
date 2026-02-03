import express, { Request, Response } from 'express'
import cors from 'cors'
import authRoutes from './routes/auth.route'
import categoryRoutes from './routes/category.route'
import productRoutes from './routes/product.route'
import { authenticate } from './middlewares/auth.middleware'
import path from 'path'

const app = express()

app.use(cors())
app.use(express.json({
    limit: '10mb'
}))
app.use(express.urlencoded({
    limit: '10mb',
    extended: true
}))
app.use('/uploads', express.static(path.join(__dirname, '../uploads')))

app.use('/api/auth', authRoutes)
app.use('/api/categories', categoryRoutes)
app.use('/api/products', productRoutes)
app.get('/', (req : Request, res : Response) => {
    res.send('SportOn Backend Is Running')
})
app.get('/middleware', authenticate, (req : Request, res : Response) => {
    res.send('This endpoint needs an authentication')
})

export default app