var React = require('react');
var {Component} = require('react');
var {AppRegistry, Text} = require('react-native');

var HelloWorldApp = React.createClass({
	render: function () {
		return <Text>Hello Something</Text>;
	}
});

AppRegistry.registerComponent('AwesomeProject', () => HelloWorldApp);