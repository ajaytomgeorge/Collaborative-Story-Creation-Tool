const express = require("express");

const app = express()
const port = process.env.PORT || 3000;

require('dotenv').config();

app.use(express.urlencoded({extended:true}));
const routes = require("./routes/storyRoutes.js")
app.use('/',routes);

app.listen(port,() => console.log(`Listening to ${port}`))


