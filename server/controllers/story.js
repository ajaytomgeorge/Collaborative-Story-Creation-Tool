require("../db/database");

const Tags = require("../models/Tags");
const Story = require("../models/Story");
const Logs = require("../models/Logs");
const asyncHandler = require("express-async-handler");
const User = require("../models/User");

// @route GET /story/create
// @desc Create New Story
// @access Public
exports.createStory = asyncHandler(async (req, res) => {
  const { title, text, content, tags } = await req.body;

  const senderId = req.user.id;

  try {
    let tag_ids = await Promise.all(
      tags.map(async (tag) => {
        return Tags.findOne({ name: tag }).select("_id").exec();
      })
    );

    tags_ids = tag_ids.map(({ _id }) => _id);

    const created_story = await Story.create({
      userId: senderId,
      title,
      text,
      content: content,
      tags: tags_ids,
    });

    const user = await User.findOne({ userId: senderId });

    await Logs.create({
      storyId: created_story._id,
      userId: user._id,
      username: user.username,
      comment: "Created Document",
      data: {},
      tags: tags_ids,
    });

    const data = await Story.findById(created_story._id).populate("tags");
    res.set("Connection", "close");
    res.status(201);
    res.json({
      status: true,
      status_code: 201,
      data: data,
      message: "Story created successfully",
    });
  } catch (error) {
    res.send({ message: `'Error occured during story creation'${error}` });
  }
});

exports.getStory = asyncHandler(async (req, res) => {
  id = req.params.id;
  story = await Story.findById(id).populate("tags");
  res.send(story);
});

exports.getTagsStory = asyncHandler(async (req, res) => {
  tagName = req.params.tag;

  let stories = await Story.aggregate([
    {
      $lookup: {
        from: "tags",
        localField: "tags",
        foreignField: "_id",
        as: "tags",
      },
    },
    {
      $match: {
        "tags.name": tagName,
      },
    },
  ]);

  res.status(200).json(stories);
});

exports.updateStory = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const senderId = req.user.id;

  const { title, text, content, lock } = req.body;
  try {
    const updatedStory = await Story.findByIdAndUpdate(
      id,
      {
        title,
        text,
        content,
        lock,
      },
      { new: true }
    );
    const user = await User.findOne({ userId: senderId });

    await Logs.create({
      storyId: updatedStory._id,
      userId: user._id,
      username: user.username,
      comment: "Updated document",
      data: {},
    });

    res.json(updatedStory);
  } catch (error) {
    res.json({ error });
  }
});

exports.lockStory = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { lock } = req.body;

  try {
    const updatedStory = await Story.findByIdAndUpdate(
      id,
      {
        lock,
      },
      { new: true }
    );
    res.json(updatedStory);
  } catch (error) {
    res.json({ error });
  }
});

exports.searchStory = asyncHandler(async (req, res) => {
  const { searchString } = req.params;

  Story.find({ $text: { $search: searchString } })
    .populate("tags")
    .exec(function (err, docs) {
      const all_stories = docs;
      res.json(all_stories);
    });
});
