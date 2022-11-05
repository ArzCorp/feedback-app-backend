const express = require('express')

const app = express()

app.listen(3001)

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/public/index.html')
})

app.use((req, res) => {
	res.status(404).sendFile(__dirname + '/public/404.html')
})
