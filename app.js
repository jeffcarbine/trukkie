'use strict'

import express from 'express'
import config from 'config'
import api from './routes'
import bodyParer from 'body-parser'
import mongoose from 'mongoose'

mongoose.connect(config.get('mongoUrl'))

const app = express()
const PORT = config.port

app.use('/api', api)

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))
