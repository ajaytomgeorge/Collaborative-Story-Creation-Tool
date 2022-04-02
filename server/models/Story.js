const mongoose = require("mongoose");
const { value } = require("mongoose/lib/options/propertyOptions");

const storySchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Types.ObjectId,
      ref: "user",
      required: true,
    },
    title: {
      type: String,
      trim: true,
      //      required: true
    },
    text: {
      type: String,
      trim: true,
      //     required: true
    },
    content: Object,
    date: {
      type: Date,
      default: Date.now,
    },

    lock: { type: Boolean, default: false },

    likes: {
      type: Number,
      default: function getRandomInt() {
        min = 5;
        max = Math.floor(25);
        let value = Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
        return value;
      },
    },
    tags: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Tags",
      },
    ],
  },
  { timestamps: true }
);

// storySchema.index({title: 'text', 'tags.name': 'text'});

storySchema.index({'$**': 'text'});
module.exports = mongoose.model("Story", storySchema);
