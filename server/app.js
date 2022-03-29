const express = require("express");
const cookieParser = require("cookie-parser");
const routes = require("./routes/storyRoutes.js");
const { requireAuth } = require('./middleware/cookieJwtAuth');

const app = express();
const port = process.env.PORT || 3000;

require('dotenv').config();

// app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cookieParser());



// app.get('/', (req,res) => res.render('homepage'));
// app.get('/' , requireAuth ,  (req,res) => res.render(''));
app.use('/api',routes);


app.listen(port,() => console.log(`Listening to ${port}`))


