import express from 'express'
import cors from 'cors'

import { notFoundMiddleware } from './middlewares/notFound.js'

import feedbackRouter from './routes/feedbacks.routes.js'
import statusRouter from './routes/status.routes.js'
import tagsRouter from './routes/tags.routes.js'
import commentsRouter from './routes/comments.routes.js'

const app = express()

app.use(cors())

app.use(express.json())

app.use(feedbackRouter)

app.use(statusRouter)

app.use(tagsRouter)

app.use(commentsRouter)

app.use(notFoundMiddleware)

export default app
