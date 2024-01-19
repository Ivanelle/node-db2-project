const router = require('express').Router()
const md = require('./cars-middleware')
const Car = require('./cars-model')

router.get('/', (req, res, next) => {
        try {

        } catch (err) {
            next(err)
        }
})

router.get('/:id', (req, res, next) => {
    try {

    } catch (err) {
        next(err)
    }
})

router.post('/:id', (req, res, next) => {
    try {

    } catch (err) {
        next(err)
    }
})

router.put('/id', (req, res, next) => {
    try {

    } catch (err) {
        next(err)
    }
})

router.delete('/id', (req, res, next) => {
    try {

    } catch (err) {
        next(err)
    }
})



