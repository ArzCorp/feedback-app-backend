import express from 'express'
import { notFoundMiddleware } from './middlewares/notFound.js'
import feedbackRouter from './routes/feedbacks.routes.js'

const app = express()

app.use(express.json())

app.use(feedbackRouter)

app.use(notFoundMiddleware)

app.listen(3001)

console.log('Server is running on port 3000')
