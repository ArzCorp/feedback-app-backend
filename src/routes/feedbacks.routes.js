import { Router } from 'express'
import {
	createFeedback,
	getFeedbacks,
} from '../controllers/feedbacks.controller.js'

const router = Router()

router.get('/feedbacks', getFeedbacks)

router.get('/feedbacks/:id', (req, res) => {
	res.send('Producto')
})

router.post('/feedbacks', createFeedback)

router.put('/feedbacks/:id', (req, res) => {
	res.send('Producto actualizado')
})

router.patch('/feedbacks/:id', (req, res) => {
	res.send('Producto actualizado')
})

router.delete('/feedbacks/:id', (req, res) => {
	res.send('Producto eliminado')
})

export default router
