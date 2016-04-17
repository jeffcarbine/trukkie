'use strict'

import express from 'express'
import location from './location'

const { Router } = express // remember destructuring?
const api = new Router()

api.use('/location', location)

export default api
