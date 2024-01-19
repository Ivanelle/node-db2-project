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

exports.checkCarPayload = async (req, res, next) => {
  const { vin, make, model, mileage } = req.body

  if(
      !vin || vin === undefined ||
      !make || make === undefined ||
      !model || model === undefined ||
      !mileage || mileage === undefined
    ) {

    res.status(404).json({
      message: 'Vin, make, model, or mileage is missing'
    })

  } else {
    next()
  }
}

exports.checkVinNumberValid = async (req, res, next) => {

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