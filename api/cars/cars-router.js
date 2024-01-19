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
    res.json(`getting car with id ${req.params.id}`)
})
router.post('/:id', async (req, res, next) => {
    res.json('posting new car')
})


module.exports = router