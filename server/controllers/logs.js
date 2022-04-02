const Logs = require("../models/Logs");

const asyncHandler = require("express-async-handler");

exports.getLogs = asyncHandler((req,res) =>{
    Logs.find({}).then((data) => res.json(data))
})