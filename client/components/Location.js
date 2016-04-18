import React from 'react'
// Even though we don't use React directly, the process to convert JSX into
// `React.createElement()` calls needs `React` available

const Location = (props) => {
  var styles = {
    cursor: 'pointer'
  }
  return (
    <div>
      <span style={styles} onClick={() => props.onClick()}>{`props.longitude, props.latitude & props.isOpen`}</span>
      &nbsp;
      <button onClick={props.onDeleteClick}>X</button>
    </div>
  )
}

export default Location
