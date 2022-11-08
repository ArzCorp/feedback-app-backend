import { createPool } from 'mysql2/promise'

export const db = createPool({
	host: 'localhost',
	user: 'root',
	password: 'Osva-0807_SQL $',
	database: 'feedbacks',
	ssl: {
		rejectUnauthorized: false,
	},
})
