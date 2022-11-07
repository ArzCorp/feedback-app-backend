const mysql2 = require('mysql2/promise')

const connectDB = async () => {
	const connection = await mysql2.createConnection({
		host: 'localhost',
		user: 'root',
		password: 'Osva-0807_SQL $',
		database: 'feedbacks',
		ssl: {
			rejectUnauthorized: false,
		},
	})

	const result = await connection.query('SELECT 1 + 1 AS result')
	console.log(result)
}

module.exports = connectDB
