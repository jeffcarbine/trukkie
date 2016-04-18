'use strict'

import mongoose from 'mongoose'

const locationSchema = new mongoose.Schema({
  latitude: {
    type: Number,
    required: true
  },
  longitude: {
    type: Number,
    required: true
  },
  status: {
    type: Boolean,
    required: true
  }
})

locationSchema.method('toJSON', function() {
  const obj = this.toObject()
  obj.id = this.id
  delete obj._id
  delete obj.__v
  return obj
})

module.exports = mongoose.model('Location', locationSchema)
