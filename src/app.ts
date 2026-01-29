import express from 'express'
import cors from 'cors'
import authRoutes from './routes/auth.route'
import { authenticate } from './middlewares/auth.middleware'

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/auth', authRoutes)
app.get('/', (req, res) => {
    res.send('SportOn Backend Is Running')
})
app.get('/middleware', authenticate, (req, res) => {
    res.send('This endpoint needs an authentication')
})

export default app