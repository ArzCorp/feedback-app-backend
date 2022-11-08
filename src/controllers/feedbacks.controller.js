import { db } from '../db.js'

export const getFeedbacks = async (req, res) => {
	const feedbacks = await db.query('SELECT * FROM feedbacks')
	res.send(feedbacks)
}

export const createFeedback = async (req, res) => {
	console.log(req.body)
	const { title, detail, tagId, ranking, statusId } = req.body

	const feedbacks = await db.query(
		`INSERT INTO feedbacks.feedbacks (title, detail, tagId, ranking, statusId)
  VALUES (?, ?, ?, ?, ?);`,
		[title, detail, tagId, ranking, statusId]
	)
	res.sendStatus(204)
}
