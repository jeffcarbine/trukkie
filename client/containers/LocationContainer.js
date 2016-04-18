'use strict'

import { connect } from 'react-redux'
import SetLocation from '../components/SetLocation'
import { setLocation } from '../actions'

// There are no non-function props we care about, but we'll keep the variable
// stubbed out incase we need to
const mapStateToProps = null

const mapDispatchToProps = (dispatch) => ({
  onSubmit(value) {
    if (!value) return
    dispatch(setLocation(value))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SetLocation)
