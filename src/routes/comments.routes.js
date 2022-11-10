import { Router } from 'express'
import {
	createComment,
	getComments,
} from '../controllers/comments.controller.js'

const router = Router()

router.get('/comments/:id', getComments)

router.post('/comments', createComment)

export default router
