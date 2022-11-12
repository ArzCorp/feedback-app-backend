import { Router } from 'express'
import { createReply, getReplies } from '../controllers/replies.controller.js'

const router = Router()

router.get('/replies/:id', getReplies)

router.post('/replies', createReply)

export default router
