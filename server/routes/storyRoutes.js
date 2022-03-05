const express = require("express")
const router = express.Router()

const storyController = require("../controllers/storyController");
/**
 * App Routes
 */

router.get('/', storyController.homepage)

module.exports = router;