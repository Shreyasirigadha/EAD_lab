const mongoose = require('mongoose')


const studentSchema = new mongoose.Schema
({

    name: 
    {
        type: String,
        required: true
    },
    dept: 
    {
        type: String,
        required: true
    },
    isEnroll: 
   {
        type: Boolean,
        required: true,
        default: false
    },
    roll: 
    {
        type: Number,
        required: true
    },
    year: 
    {
        type: Number,
        required: true
    }

})

module.exports = mongoose.model('Student',studentSchema)
