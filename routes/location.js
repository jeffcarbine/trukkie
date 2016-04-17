'use strict'

import express from 'express'

const { Router } = express
const locationRouter = new Router()

// gets the current location from the database
locationRouter.get('/', (req, res, next) => {
  Location.find((err, locations) => {
    if (err) return next(err)
    res.json(locations)
  })
})

// sends the updated location to the databse
locationRouter.post('/', (req, res, next) => {
  Location.create(req.body, (err, locations) => {
    if (err) return next(err)
    res.status(201).json(locations)
  })
})

export default locationRouter
