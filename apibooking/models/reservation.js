import mongoose from "mongoose";
const Schema = mongoose.Schema;
const reservationSchema = new Schema({
    
    user_id:{
        type:mongoose.Schema.ObjectId, 
        ref :'User',
        required: true,
    },
    service_id:{
        type: mongoose.Schema.ObjectId,
        ref: 'Service',
        required:true,
    },
    date:{
        
    },
    time:{
        type:String,
        required:true,
    },
    number_of_people:{
        type:Number,
        required:true,
    }
});
const Reservation = mongoose.model("reservations", reservationSchema);
export default Reservation;

