const mongoose = require('mongoose');

const storySchema = new  mongoose.Schema({

    userId: {
        type: mongoose.Types.ObjectId,
        ref: "user",
        required: true,
    },
    title: {
           type: String,
           trim: true,
            required: true
    },
    text: {
           type: String,
           trim: true,
           required: true
    },
    date: {
           type: Date,
           default: Date.now
    },
    tags: [{
           type: mongoose.Types.ObjectId,
           ref: "tags",
    }],
},
    {timestamps:true}
);

module.exports = mongoose.model('Story', storySchema);