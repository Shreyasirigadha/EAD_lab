const express = require('express')
const mongoose = require('mongoose')
const cors=require('cors')
const studentRouter = require('./routes/students')


const url = 'mongodb://127.0.0.1:27017/CBIT_CRUD'
//const url = 'mongodb+srv://shreyasirigadha0784:dummypassword@crudoperations.8xcwr.mongodb.net/?retryWrites=true&w=majority&appName=CRUDoperations'
const app = express()
mongoose.connect(url)
const con = mongoose.connection


con.on('open', () =>
{
console.log('connected...')
})
app.use(cors())
app.use(express.json())

app.use('/students',studentRouter)
app.listen(9000, () =>
{
console.log('Server started')
})
