import React from 'react'
import Location from './Location' // Import our Todo component that we just wrote.

const LocationList = (props) => {
  return (
    <ul>
      {
        props.locations.map((location) => {
          return (
            <li key={location.id}>
              <Location
                longitude={locaiton.longitude}
                latitude={location.latitude}
                status={location.status}
              />
            </li>
          )
        })
      }
    </ul>
  )
}
