import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String, 
        required :true
    },
    role : {
        type : String,
        enum : ['viewer','analyst','admin'],
        default : 'viewer',
        required : true
    },
    isActive : {
        type : Boolean,
        default : false
    }
},{timestamps : true});

const User = mongoose.model('User',userSchema);

export default User;