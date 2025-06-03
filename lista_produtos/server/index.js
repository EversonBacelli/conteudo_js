const express = require ('express')
const produtos = require('./db.js')
const path = require('path')

var cors = require('cors')

const app = express()

app.use(cors({
    origin: '*'
}));

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.get('/produtos', (req, res) => {
  res.json(produtos)
})

app.get('/img/:nameImg', (req, res) => {
    const nameImg = req.params.nameImg
    const end = path.join(__dirname, './img', nameImg)
    res.sendFile(end)
})


const porta = process.env.PORT || 3000
app.listen(porta, console.log(`Servidor rodando na porta ${porta}`))
