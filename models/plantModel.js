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
  description: {
    type: String,
    trim: true,
    required: [true, 'A plant must have a description'],
  },
  botanicalName: String,
  family: String,
  plantType: String,
  category: {
    type: String,
    trim: true,
    enum: {
      values: ['Flowering', 'Foliage', 'Herbs', 'Shrubs', 'Succulents & Cacti', 'Trees'],
    },
  },
  light: String,
  water: String,
  temperature: String,
  fertilize: String,
  humidity: String,
  matureSize: String,
  repotting: String,
  bloomTime: String,
  nativeArea: String,
  imageCover: {
    type: String,
    // required: [true, 'A plant must have a cover image'],
  },
  images: [String],
});

const Plant = mongoose.model('plants', plantSchema);

module.exports = Plant;
