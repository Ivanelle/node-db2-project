const Car = require('../cars/cars-model')
const db = require('../../data/db-config')



exports.checkCarId = async (req, res, next) => {
  try {
    const car = await Car.getById(req.params.id)
    if(!car) {
      res.status(404).json({
          message: `car with id ${car} is not found`
      })
    } else {
      req.car = car
      next()
    }
  } catch (err) {
    next(err)
  }
}

const checkCarPayload = (req, res, next) => {
  // DO YOUR MAGIC
}

const checkVinNumberValid = (req, res, next) => {
  // DO YOUR MAGIC
}

const checkVinNumberUnique = (req, res, next) => {
  // DO YOUR MAGIC
}