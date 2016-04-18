import React, { Component } from 'react'
import SetLocation from './SetLocation'
import LocationList from './LocationList'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = { todos: [], autoId: 1 }
    this.setLocation = this.setLocation.bind(this)
  }

  setLocation(name) {
    this.setState({
      autoId: this.state.autoId + 1,
      todos: [
        ...this.state.locations,
        {
          id: this.state.autoId,
          longitude,
          latitude,
          status: false
        }
      ]
    })
  }

  render() {
    return (
      <div>
        <SetLocation onSubmit={this.setLocation} />
        <LocationList
          locations={this.state.locations}
        />
      </div>
    )
  }

}

export default App
