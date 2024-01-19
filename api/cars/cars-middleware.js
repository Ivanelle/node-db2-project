const Car = require('../cars/cars-model')
const db = require('../../data/db-config')
const vinValidator = require('vin-validator')


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

exports.checkCarPayload = async (req, res, next) => {
  if(!req.body.vin) return next({
    status: 400,
    message: 'vin is missing'
  })
  if(!req.body.make) return next({
    status: 400,
    message: 'make is missing'
  })
  if(!req.body.model) return next({
    status: 400,
    message: 'model is missing'
  })
  if(!req.body.mileage) return next({
    status: 400,
    message: 'mileage is missing'
  }) 
  next()
}

exports.checkVinNumberValid = async (req, res, next) => {
  const { vin } = req.body
  try {
    const validatedVin = vinValidator.validate(vin)
    if (validatedVin) {
      next()
    } else {
      res.status(400).json({
        message: `vin ${vin} is invalid`
      })
    }
  } catch(err) {
    next(err)
  }
 

}

exports.checkVinNumberUnique = async (req, res, next) => {
  try {
    const vinExisting = await db('cars').where('vin', req.body.vin)
 
     if(vinExisting.length > 0) {
       res.status(400).json({
         message: `vin ${req.body.vin} already exists`
       })
     } else {
       next()
     }
   } catch(err) {
     next(err)
   }
}