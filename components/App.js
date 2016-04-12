var React = require('react');

// react components
var Map = require('./Map');

var App = React.createClass({

	getInitialState(){

		return {
			mapCoordinates: {
				lat: 48.856614,
				lng: 2.3522219
			}
		};
	},

	setGeolocation(){

		var self = this;

		function setLocationAsync() {
			return new Promise(function(resolve,reject){
				navigator.geolocation.getCurrentPosition(function(position) {
		      resolve(position)
		    })
			})
		}

		setLocationAsync()
		  .then(function(position) {
				// call to db to save location
				// call back from db when finished
		    self.setState({
					mapCoordinates: {
		        lat: position.coords.latitude,
		        lng: position.coords.longitude
		      }
				})
	    });

	},

	render(){

		return (

			<div>
				<h1>Trukkie</h1>
				<button class="btn btn-default"	onClick={this.setGeolocation}>Set Location</button>
				<Map lat={this.state.mapCoordinates.lat} lng={this.state.mapCoordinates.lng} />
			</div>

		);
	}
});

module.exports = App;
