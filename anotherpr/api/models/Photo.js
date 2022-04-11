const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const config = require('../config')
const path = require("path");
const mime = require('mime-types');


const photoTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];


const PhotoSchema = new mongoose.Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  title: {
    type: String,
    required: true,
    unique: true,
  },
  image: {
    type: String,
    validate: {
      validator: function(value) {
        const filePath = path.join(config.uploadPath, value);
        const mimeType = mime.lookup(filePath);
        return photoTypes.includes(mimeType);
      },
      message: 'Image file format is incorrect'
    }
  }

});

const Photo = mongoose.model('Photo', PhotoSchema);

module.exports = Photo;
