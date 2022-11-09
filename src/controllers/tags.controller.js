import { db } from '../db.js'
import { templateResponse } from '../utils/templateResponse.js'

export const getTags = async (req, res) => {
	try {
		const [rows] = await db.query('SELECT * FROM tags')
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
