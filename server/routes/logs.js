const express = require("express")
const router = express.Router()

const {getLogs} = require("../controllers/logs")

router.route("/").get(getLogs);

module.exports = router