import express from 'express'
import { notFoundMiddleware } from './middlewares/notFound.js'
import feedbackRouter from './routes/feedbacks.routes.js'
import cors from 'cors'

const app = express()

app.use(cors())

app.use(express.json())

app.use(feedbackRouter)

app.use(notFoundMiddleware)

export default app
