const mongoose = require('mongoose');
require('dotenv').config();


// mongoose.connect(process.env.MONGO_URL,{  useNewUrlParser:true, useUnifiedTopology: true });
mongoose.connect("mongodb+srv://storytool:JIqzA8hnUUWNvvcC@cluster0.lalsn.mongodb.net/StoryDatabase?retryWrites=true&w=majority",{  useNewUrlParser:true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error',console.error.bind(console,'Connection error:'));
db.once('open', function(){
    console.log('Connected');
})



//Models
require('./Tags');
require('./Story');
require('./User');
require('./Logs');