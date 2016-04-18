'use strict'

import express from 'express'
import Location from './location'

const { Router } = express
const locationRouter = new Router()

// gets the current location from the database
locationRouter.get('/', (req, res, next) => {
  Location.find()
    .exec()
    .then((locations) => res.json(locations))
    .catch(next)
})

// sends the updated location to the databse
locationRouter.post('/', (req, res, next) => {
  Location.create(req.body)
    .then((locations) => res.status(201).json(locations))
    .catch(next)
})

export default locationRouter
