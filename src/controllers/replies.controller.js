import { db } from '../db.js'
import { templateResponse } from '../utils/templateResponse.js'

export const getReplies = async (req, res) => {
	const { id } = req.params

	try {
		const [rows] = await db.query('SELECT * FROM replies WHERE commentId = ?', [
			id,
		])
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

export const createReply = async (req, res) => {
	try {
		const { commentId, userId, message } = req.body

		const [ResultSetHeader] = await db.query(
			`INSERT INTO replies (commentId, userId, message)
    VALUES (?, ?, ?);`,
			[commentId, userId, message]
		)

		const [rows] = await db.query('SELECT * FROM comments WHERE id = ?;', [
			ResultSetHeader.insertId,
		])

		res.json({
			...templateResponse,
			data: rows[0],
			message: `Reply created`,
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
