'use strict'

import React from 'react'
import LocationContainer from '../containers/LocationContainer'
import LocationListContainer from '../containers/LocationListContainer'

class App extends React.Component {

  render() {
    return (
      <div>
        <LocationContainer />
        <LocationListContainer />
      </div>
    )
  }

}

export default App
