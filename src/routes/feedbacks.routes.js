import { Router } from 'express'
import {
	createFeedback,
	deleteFeedback,
	getFeedback,
	getFeedbacks,
	updateFeedback,
} from '../controllers/feedbacks.controller.js'

const router = Router()

router.get('/feedbacks', getFeedbacks)

router.get('/feedbacks/:id', getFeedback)

router.post('/feedbacks', createFeedback)

router.patch('/feedbacks/:id', updateFeedback)

router.delete('/feedbacks/:id', deleteFeedback)

export default router
