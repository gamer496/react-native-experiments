var React = require('react');
var {Component} = require('react');
var {AppRegistry, Text, View} = require('react-native');


var Greeting = React.createClass({
	render: function () {
		return <Text>Hello {this.props.name}</Text>
	}
});

var LotsOfGreetings = React.createClass({
	render: function () {
		return (
			<View style={{alignItems: 'center'}}>
				<Greeting name='Rexxar' />
				<Greeting name='Jaina' />
				<Greeting name='Valeera' />
			</View>
		)
	}
});

AppRegistry.registerComponent('AwesomeProject', () => LotsOfGreetings);