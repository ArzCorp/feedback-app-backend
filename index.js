const express = require('express')

const app = express()

app.listen(3001)

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/public/index.html')
})

app.get('/feedbacks', (req, res) => {
	res.json({
		status: 'ok',
		success: true,
		data: [
			{
				title: 'Error en el servidor',
			},
		],
	})
})

app.post('/feedbacks', (req, res) => {
	res.json({
		status: 'ok',
		success: true,
		data: [],
	})
})

app.use((req, res) => {
	res.status(404).sendFile(__dirname + '/public/404.html')
})
