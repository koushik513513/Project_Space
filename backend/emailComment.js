// schema
// import mongoose from "mongoose";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let feedback=new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    comments:{
        type:String,
        default:'executive'
    }
});

// export default mongoose.model("send",mail);
// export default mongoose.model("collectionName",SchemaVariableName);
module.exports = mongoose.model("feedback",feedback);