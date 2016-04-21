'use strict'

import React from 'react'
import Location from './Location'
import styles from './LocationList.css'

class LocationList extends React.Component {

  componentWillMount() {
    this.props.init()
  }

  render() {
    return (
      <ul className={styles.list}>
        {
          this.props.locations.map((location) => {
            return (
              <li className={styles.listItem} key={location.id}>
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
