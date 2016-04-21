import React from 'react'
import styles from './Location.css'
// Even though we don't use React directly, the process to convert JSX into
// `React.createElement()` calls needs `React` available

const Location = (props) => {
  return (
    <div className={styles.location}>
      <span className={styles.locationText} onClick={() => props.onClick()}>{`${props.longitude}, ${props.latitude} & ${props.isOpen}`}</span>
    </div>
  )
}

export default Location
