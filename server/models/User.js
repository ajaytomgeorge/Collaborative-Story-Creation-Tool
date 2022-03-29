const mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var SALT_WORK_FACTOR = 10;

const userSchema = new  mongoose.Schema({

    username: {
        type: String,
        lowercase: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },    
    register_date: {
        type: Date,
        default: Date.now
    }
},
    {timestamps:true}
);


userSchema.pre('save', function(next) {
    var user = this;

if (!user.isModified('password')){
    return next();
} 

bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
    if (err){
        return next(err);
    } 

    bcrypt.hash(user.password, salt, function(err, hash) {
        if (err) {
            return next(err);
        }
        console.log('HASH: ', hash);
        user.password = hash;
        console.log('USER.PASSWORD: ', user.password);
        next();
    });
});


});


module.exports = mongoose.model('User', userSchema);