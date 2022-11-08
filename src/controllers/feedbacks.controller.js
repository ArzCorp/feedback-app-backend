import { db } from '../db.js'
import { templateResponse } from '../utils/templateResponse.js'

export const getFeedbacks = async (req, res) => {
	const [rows] = await db.query('SELECT * FROM feedbacks')
	res.send({
		...templateResponse,
		data: rows,
	})
}

export const createFeedback = async (req, res) => {
	console.log(req.body)
	const { title, detail, tagId, ranking, statusId } = req.body

	await db.query(
		`INSERT INTO feedbacks.feedbacks (title, detail, tagId, ranking, statusId)
    VALUES (?, ?, ?, ?, ?);`,
		[title, detail, tagId, ranking, statusId]
	)

	res.send({ ...templateResponse, message: 'Feedback created' })
}
