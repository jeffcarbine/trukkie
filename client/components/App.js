'use strict'

import React from 'react'
import SetLocationContainer from '../containers/SetLocationContainer'
import LocationListContainer from '../containers/LocationListContainer'

class App extends React.Component {

  render() {
    return (
      <div>
        <SetLocationContainer />
        <LocationListContainer />
      </div>
    )
  }

}

export default App
