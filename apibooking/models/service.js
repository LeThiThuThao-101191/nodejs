import mongoose from "mongoose";

const Schema = mongoose.Schema;
const serviceSchema = new Schema({
  
    name:{
        type:String,
        required:true,
        unique:true,
    },
    description:{
        type:String,
         required:true,

    },
});

const Service = mongoose.model("services", serviceSchema);
export default Service;

