const Tags = require("../models/Tags");

const asyncHandler = require("express-async-handler");

exports.getTags = asyncHandler(async (req, res) => {
  try {
    const allTags = await Tags.find({});
    const modTags = allTags.map(function(tags) {
        return tags.toObject();})

    res.json({
      tags: modTags,
    });
  } catch (err) {
    console.log("error occured in tags", err);
  }
});
