'use strict'

import { connect } from 'react-redux'
import LocationList from '../components/LocationList'

// the object returned from this function gets put into the props. This should
// be used for non-function properties, like the todos property of the TodoList.
const mapStateToProps = (state) => {
  // Note that the state here maps up to the entire state object, so state.todos
  // maps up to the todos reducer, and likewise with the filter reducer and
  // state.filter
  let locations = state.locations.items

  return { locations }
}

// We use the `react-redux` connect() method to get these functions connected
// to our "dumb" component. We can now use this container like any other react
// component
export default connect(
  mapStateToProps
)(LocationList)
