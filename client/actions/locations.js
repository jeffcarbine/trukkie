'use strict'

import request from 'axios'

const setLocationRequest = (location) => ({
  type: 'LOCATION_CREATE_REQUEST',
  payload: location
})
const setLocationSuccess = (location) => ({
  type: 'LOCATION_CREATE_SUCCESS',
  payload: location
})
const setLocationFailure = (err) => ({
  type: 'LOCATION_CREATE_FAILURE',
  payload: err,
  error: true
})

export const setLocation = (longitude, latitude) => (dispatch) => {
  const location = {
    longitude,
    latitude,
    isOpen: true
  }
  dispatch(setLocationRequest(location))
  request
    .post('/api/location', location)
    .then((response) => {
      dispatch(setLocationSuccess(response.data))
    })
    .catch((response) => {
      dispatch(setLocationFailure(response.data))
    })
}

const fetchLocationsRequest = () => ({
  type: 'LOCATION_FETCH_REQUEST'
})
const fetchLocationsSuccess = (todos) => ({
  type: 'LOCATION_FETCH_SUCCESS',
  payload: todos
})
const fetchLocationsFailure = (err) => ({
  type: 'LOCATION_FETCH_FAILURE',
  payload: err,
  error: true
})

export const fetchLocations = () => (dispatch) => {
  dispatch(fetchLocationsRequest())
  request
    .get('/api/location')
    .then((response) => {
      dispatch(fetchLocationsSuccess(response.data))
    })
    .catch((response) => {
      dispatch(fetchLocationsFailure(response.data))
    })
}

const deleteLocationRequest = (id) => ({
  type: 'LOCATION_DELETE_REQUEST',
  payload: id
})
const deleteLocationSuccess = (id) => ({
  type: 'LOCATION_DELETE_SUCCESS',
  payload: id
})
const deleteLocationFailure = (data) => ({
  type: 'LOCATION_DELETE_FAILURE',
  payload: data,
  error: true
})

export const deleteLocation = (id) => (dispatch) => {
  dispatch(deleteLocationRequest(id))
  request
    .delete(`/api/todos/${id}`)
    .then((response) => {
      dispatch(deleteLocationSuccess(id))
    })
    .catch((response) => {
      dispatch(deleteLocationFailure(response.data))
    })
}
