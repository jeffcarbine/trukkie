'use strict'

import path from 'path'
import express from 'express'
import config from 'config'
import api from './routes'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'

mongoose.connect(config.get('mongoUrl'))

const app = express()
const PORT = config.port
const PUBLIC_DIR = path.join(__dirname, 'public')

app.use(bodyParser.json())
app.use('/api', api)
app.use(express.static(PUBLIC_DIR))

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))
