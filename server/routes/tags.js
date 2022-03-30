const express = require("express")
const router = express.Router()

const { getTags } = require("../controllers/tags");

router.route("/").get(getTags);

module.exports = router