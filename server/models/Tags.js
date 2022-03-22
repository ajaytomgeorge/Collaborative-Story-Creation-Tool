const mongoose = require('mongoose');

const tagSchema = new  mongoose.Schema({

    name: {
        type : String,
        required: 'This field is required.'
    },
    description: {
        type : String,
        required: 'This field is required.'
    }
});

module.exports = mongoose.model('Tag', tagSchema);