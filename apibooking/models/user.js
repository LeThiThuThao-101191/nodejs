import mongoose from "mongoose";
import bcrypt from "bcrypt";
const Schema = mongoose.Schema;
const userSchema = new Schema({
    username:{
        type:String,
         required:true,

    },
    password:{
        type:String,
         required:true,

    }
});
// Ma hoa password
userSchema.pre("save", async function 
    (next) {
        if(!this.isModified('password'))
            return next();
        this.password = await bcrypt.hash(this.password,5);
        next();
    
})
const User = mongoose.model("user", userSchema);
export default User;

