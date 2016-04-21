'use strict'

import { connect } from 'react-redux'
import { setLocation } from '../actions'
import SetLocation from '../components/SetLocation'

const mapDispatchToProps = (dispatch) => {
  return {
    setLocation(longitude, latitude){
      dispatch(setLocation(longitude, latitude))
    }

  }
}

export default connect(
  null,
  mapDispatchToProps
)(SetLocation)
