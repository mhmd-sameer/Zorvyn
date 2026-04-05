import mongoose from "mongoose";

const recordSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    amount :{
        type: Number,
        required:true
    },
    type: {
        type:String,
        enum:['income','expense']
    },
    category: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    notes: {
        type: String
    }
})

const Record = mongoose.model("Record",recordSchema);

export default Record;