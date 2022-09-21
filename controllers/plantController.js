const Plant = require('./../models/plantModel');
const APIFeatures = require('./../utils/apiFeatures');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');

exports.getAllPlants = catchAsync(async (req, res, next) => {
  const features = new APIFeatures(Plant.find(), req.query).sort();
  const plants = await features.query;

  // Send Response
  res.status(200).json({
    status: 'success',
    results: plants.length,
    data: {
      plants,
    },
  });
});

exports.getPlant = catchAsync(async (req, res, next) => {
  const plant = await Plant.findById(req.params.id);

  if (!plant) return next(new AppError('No plant found with this ID', 404));

  res.status(200).json({
    status: 'success',
    data: {
      plant,
    },
  });
});

exports.createPlant = catchAsync(async (req, res, next) => {
  const newPlant = await Plant.create(req.body);

  res.status(201).json({
    status: 'success',
    data: {
      plant: newPlant,
    },
  });
});

exports.updatePlant = catchAsync(async (req, res, next) => {
  const plant = await Plant.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!plant) return next(new AppError('No plant found with this ID', 404));

  res.status(200).json({
    status: 'success',
    data: {
      plant,
    },
  });
});

exports.deletePlant = catchAsync(async (req, res, next) => {
  const plant = await Plant.findByIdAndDelete(req.params.id);

  if (!plant) return next(new AppError('No plant found with this ID', 404));

  res.status(204).json({
    status: 'success',
    data: null,
  });
});
