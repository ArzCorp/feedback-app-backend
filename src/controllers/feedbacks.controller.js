import { db } from '../db.js'
import { templateResponse } from '../utils/templateResponse.js'

export const getFeedbacks = async (req, res) => {
	try {
		const [rows] = await db.query('SELECT * FROM feedbacks')
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

export const createFeedback = async (req, res) => {
	try {
		const { title, detail, tagId, ranking, statusId } = req.body

		const [ResultSetHeader] = await db.query(
			`INSERT INTO feedbacks.feedbacks (title, detail, tagId, ranking, statusId)
    VALUES (?, ?, ?, ?, ?);`,
			[title, detail, tagId, ranking, statusId]
		)

		const [rows] = await db.query(
			'SELECT * FROM feedbacks.feedbacks WHERE id = ?;',
			[ResultSetHeader.insertId]
		)

		res.json({
			...templateResponse,
			data: rows[0],
			message: `Feedback created`,
		})
	} catch {
		res.status(500).json({
			...templateResponse,
			status: 'error',
			success: false,
			message: error.message,
		})
	}
}

export const getFeedback = async (req, res) => {
	try {
		const { id } = req.params
		const [rows] = await db.query('SELECT * FROM feedbacks WHERE id = ?;', [id])
		if (rows.length > 0) {
			return res.json({
				...templateResponse,
				data: rows[0],
			})
		}

		res.status(404).json({
			...templateResponse,
			status: 'not found',
			success: false,
			message: 'Feedback not found',
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

export const deleteFeedback = async (req, res) => {
	try {
		const { id } = req.params
		const [response] = await db.query('DELETE FROM feedbacks WHERE id = ?;', [
			id,
		])

		if (response.affectedRows > 0) {
			return res.json({
				...templateResponse,
				message: 'Feedback deleted',
			})
		}

		res.status(404).json({
			...templateResponse,
			status: 'not found',
			success: false,
			message: 'Feedback not found',
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

export const updateFeedback = async (req, res) => {
	try {
		const { id } = req.params
		const { title, detail, tagId, ranking, statusId } = req.body

		const [response] = await db.query(
			`UPDATE feedbacks SET title = IFNULL(?, title), detail = IFNULL(?, detail), tagId = IFNULL(?, tagId), ranking = IFNULL(?, ranking), statusId = IFNULL(?, statusId) WHERE id = ?;`,
			[title, detail, tagId, ranking, statusId, id]
		)

		if (response.affectedRows > 0) {
			const [rows] = await db.query('SELECT * FROM feedbacks WHERE id = ?;', [
				id,
			])

			return res.json({
				...templateResponse,
				data: rows[0],
				message: 'Feedback updated',
			})
		}

		res.status(404).json({
			...templateResponse,
			status: 'not found',
			success: false,
			message: 'Feedback not found',
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
