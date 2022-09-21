const mongoose = require('mongoose');
const slugify = require('slugify');

const plantSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    unique: true,
    required: [true, 'A plant must have a name'],
    maxlength: [80, 'A plant title must have less or equal then 30 characters'],
  },
  slug: String,
  light: {
    type: Number,
    required: [true, 'A plant must have light required'],
  },
  temperature: Number,
  water: Number,
  fertilize: Number,
  botanicalName: String,
  family: String,
  type: String,
  category: String,
  size: Number,
  repotting: Number,
  bloom: {
    type: Boolean,
    default: false,
  },
  nativeArea: String,
  imageCover: {
    type: String,
    required: [true, 'A plant must have a cover image'],
  },
  images: [String],
  description: {
    type: String,
    trim: true,
  },
});

const Plant = mongoose.model('plants', plantSchema);

module.exports = Plant;
