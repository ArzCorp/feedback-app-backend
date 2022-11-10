import { db } from '../db.js'
import { templateResponse } from '../utils/templateResponse.js'

export const getComments = async (req, res) => {
	const { id } = req.params

	try {
		const [rows] = await db.query(
			'SELECT * FROM comments WHERE feedbackId = ?',
			[id]
		)
		res.send({
			...templateResponse,
			data: rows,
		})
	} catch (error) {
		res.status(500).json({
			...templateResponse,
			status: 'error',
			success: false,
			message: error.message,
		})
	}
}

export const createComment = async (req, res) => {
	try {
		const { feedbackId, userId, comment } = req.body

		console.log(req.body)

		const [ResultSetHeader] = await db.query(
			`INSERT INTO comments (feedbackId, userId, comment)
    VALUES (?, ?, ?);`,
			[feedbackId, userId, comment]
		)

		const [rows] = await db.query('SELECT * FROM comments WHERE id = ?;', [
			ResultSetHeader.insertId,
		])

		res.json({
			...templateResponse,
			data: rows[0],
			message: `Feedback created`,
		})
	} catch (error) {
		res.status(500).json({
			...templateResponse,
			status: 'error',
			success: false,
			message: error.message,
		})
	}
}
