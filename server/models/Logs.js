const mongoose = require('mongoose');

const logSchema = new  mongoose.Schema({

    storyId: {
        type: mongoose.Types.ObjectId,
        ref: "story",
        required: true
    },
    userId: {
        type: mongoose.Types.ObjectId,
        ref: "user",
        required: true
    },
    register_date: {
        type: Date,
        default: Date.now
    },
    comment:{
        type:String,
        default : "no comments added"
    
    }
},
    {timestamps:true}
);

module.exports = mongoose.model('Logs', logSchema);