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

		navigator.geolocation.getCurrentPosition(function(position) {
			latitude = position.coords.latitude;
			longitude = position.coords.longitude;
			return(latitude, longitude);
		})
		.then(function(latitude, longitude) {
			console.log('Promise worked!');
			return {
				mapCoordinates: {
					lat: latitude,
					lng: longitude,
				}
			};
		})

	},

	render(){

		return (

			<div>
				<h1>Hello World</h1>
				<button class="btn btn-default"	onClick={this.setGeolocation}>Set Location</button>
				<Map lat={this.state.mapCoordinates.lat} lng={this.state.mapCoordinates.lng} />
			</div>

		);
	}
});

module.exports = App;
