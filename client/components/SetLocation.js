import React, { Component } from 'react'

class SetLocation extends React.Component {

  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    navigator.geolocation.getCurrentPosition((position) => {
      const longitude = position.coords.longitude
      const latitude = position.coords.latitude
    })
    const isOpen = true;
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <button>Set Location</button>
      </form>
    )
  }

}

export default SetLocation
