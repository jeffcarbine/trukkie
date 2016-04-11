var React = require('react');

var App = React.createClass({

	setGeolocation(address){

		navigator.geolocation.getCurrentPosition(function(position) {
			console.log('Getting GPS coordinates...');
			latitude = position.coords.latitude;
			longitude = position.coords.longitude;
			console.log('Coordinates are ' + latitude + ', ' + longitude);
		});

	},

	render(){

		return (

			<div>
				<h1>Hello World</h1>
				<button class="btn btn-default"	onClick={this.setGeolocation}>Set Location</button>
			</div>

		);
	}
});

module.exports = App;
