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

export const setLocation = (name) => (dispatch) => {
  const location = {
    longitude,
    latitude,
    isOpen: true
  }
  dispatch(setLocationRequest(todo))
  request
    .post('/api/todos', todo)
    .then((response) => {
      dispatch(setLocationSuccess(response.data))
    })
    .catch((response) => {
      dispatch(setLocationFailure(response.data))
    })
}

const listLocationsRequest = () => ({
  type: 'LOCATION_LIST_REQUEST'
})
const listLocationsSuccess = (todos) => ({
  type: 'LOCATION_LIST_SUCCESS',
  payload: todos
})
const listLocationsFailure = (err) => ({
  type: 'LOCATION_LIST_FAILURE',
  payload: err,
  error: true
})

export const listLocations = () => (dispatch) => {
  dispatch(listTodolistLocationsRequestsRequest())
  request
    .get('/api/todos')
    .then((response) => {
      dispatch(listLocationsSuccess(response.data))
    })
    .catch((response) => {
      dispatch(listLocationsFailure(response.data))
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
