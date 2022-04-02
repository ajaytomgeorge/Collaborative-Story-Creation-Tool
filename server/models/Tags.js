const mongoose = require("mongoose");

const tagSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

if (!tagSchema.options.toObject) tagSchema.options.toObject = {};
tagSchema.options.toObject.transform = function (doc, ret) {
  // remove the unused parameters of every document before returning the result
  delete ret._id;
  delete ret.createdAt;
  delete ret.updatedAt;
  delete ret.__v;
  return ret;
}

module.exports = mongoose.model("Tags", tagSchema);
