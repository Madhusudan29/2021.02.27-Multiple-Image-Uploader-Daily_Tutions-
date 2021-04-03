const mongoose = require("mongoose");
const Schema = new mongoose.Schema({
  fileName: {
    type: String,
    unique: true,
    required: true,
  },
  contentType: {
    type: String,
    required: true,
  },
  imageBased64: {
    type: String,
    required: true,
  },
});
const fileModel = new mongoose.model("fileuploader", Schema);
module.exports = fileModel;
