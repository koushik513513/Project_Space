const mongoose = require('mongoose')

const complaintSchema = new mongoose.Schema({
    executive_name:{
        type:String,
        required:true
    },
    hall_no:{
        type:String,
        required:true
    },
    issue_type:{
        type:String,
        required:true
    },
    complaint:{
        type:String,
        required:true
    }
})

module.exports =  mongoose.model('complaints',complaintSchema)