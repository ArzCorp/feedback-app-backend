const express = require('express')
const connectDB = require('./db')

const app = express()

connectDB()

app.get('/feedbacks', (req, res) => {
	res.send('feedbacks')
})

app.get('/feedbacks/:id', (req, res) => {
	res.send('Producto')
})

app.post('/feedbacks', (req, res) => {
	res.send('Producto creado')
})

app.put('/feedbacks/:id', (req, res) => {
	res.send('Producto actualizado')
})

app.patch('/feedbacks/:id', (req, res) => {
	res.send('Producto actualizado')
})

app.delete('/feedbacks/:id', (req, res) => {
	res.send('Producto eliminado')
})

app.listen(3001)

console.log('Server is running on port 3000')
