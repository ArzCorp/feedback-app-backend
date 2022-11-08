import { templateResponse } from '../utils/templateResponse.js'

export const notFoundMiddleware = (req, res, next) => {
	res.status(404).json({
		...templateResponse,
		status: 'error',
		success: false,
		message: 'Endpoint not found',
	})
}
