'use strict'

import express from 'express'

const { Router } = express
const locationRouter = new Router()

const location = []

locationRouter.get('/', (req, res, next) => {
  res.json(location)
})

export default locationRouter
