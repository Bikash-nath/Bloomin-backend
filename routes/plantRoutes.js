const express = require('express');
const plantController = require('./../controllers/plantController');

const router = express.Router();

router.route('/').get(plantController.getAllPlants).post(plantController.createPlant);

router
  .route('/:id')
  .get(plantController.getPlant)
  .patch(plantController.updatePlant)
  .delete(plantController.deletePlant);

module.exports = router;
