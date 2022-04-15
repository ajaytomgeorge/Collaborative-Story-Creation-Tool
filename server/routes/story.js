const express = require("express");
const router = express.Router();

const protect = require("../middleware/auth");

const story = require("../controllers/story");
/**
 * App Routes
 */

router.post("/create", protect, story.createStory);
router.get("/get/:id", story.getStory);
router.get("/get-stories/:tag?", protect,story.getTagsStory);
router.put("/update/:id", protect, story.updateStory);
router.put("/lock/:id", protect, story.lockStory);
router.get("/search/:searchString",protect, story.searchStory);

module.exports = router;
