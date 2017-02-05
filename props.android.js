var React = require('react');
var { Component } = require('react');
var {AppRegistry, Image} = require('react-native');

class Bananas extends Component {
	render () {
		let pic = {
			uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
		};
		return (
			<Image source = {pic} style = {{width: 193, height: 110}} />
		);
	}
}

AppRegistry.registerComponent('AwesomeProject', () => Bananas);