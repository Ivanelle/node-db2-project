const express = require('express')
const router = express.Router()
const md = require('./cars-middleware')
const Car = require('./cars-model')

router.get('/', (req, res) => {
    Car.getAll()
    .then(cars => {
        res.json(cars)
    })
    .catch(err => {
        res.status(500).json({
            message: `Sorry I cant be more of a help: ${err}` 
        })
    })
})

router.get('/:id', md.checkCarId, async (req, res, next) => {
    try {
        const carId = await Car.getById(req.params.id)
        res.json(carId)

    } catch (err) {

        next(err)
    }
})

router.post('/', 
    md.checkCarPayload, 
    md.checkVinNumberUnique,
    md.checkVinNumberValid,
    (req, res, next) => {
         Car.create({
                vin: req.body.vin,
                make: req.body.make,
                model: req.body.model,
                mileage: req.body.mileage,
                title: req.body.title,
                transmission: req.body.transmission
            })
            .then(newCar => {
                res.status(201).json(newCar)
            })
            .catch(err => {
                next(err)
            })
})


module.exports = router