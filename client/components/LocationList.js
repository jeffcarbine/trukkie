'use strict'

import React from 'react'
import Location from './Location'

class LocationList extends React.Component {

  componentWillMount() {
    this.props.init()
  }

  render() {
    return (
      <ul>
        {
          this.props.locations.map((location) => {
            return (
              <li key={location.id}>
                <Location
                  latitude={location.latitude}
                  longitude={location.longitude}
                  isOpen={location.isOpen}
                  onDeleteClick={() => this.props.onLocationDeleteClick(location)}
                />
              </li>
            )
          })
        }
      </ul>
    )
  }

}

export default LocationList
