var React = require('react');
var { AppRegistry, Text, View} = require('react-native');

var Blink = React.createClass({
	getInitialState: function () {
		return ({
			showText: true
		})
	},

	componentDidMount: function () {
		this.timer = setInterval(()=>{
			this.setState({
				showText: !this.state.showText
			});
		}, 1000);
	},

	componentWillUnmount: function () {
		clearInterval(this.timer);
		this.timer = undefined;
	},

	render: function () {
		var display = this.state.showText ? this.props.text : ' ';
		return (
			<Text>{display}</Text>
		)
	}
})

var BlinkApp = React.createClass({
	render: function () {
		return (
			<View style = {{alignItems: 'center'}}>
				<Blink text='I love to blink' />
				<Blink text='Yes blinking is so great' />
				<Blink text='Why did they ever take this out of HTML' />
				<Blink text='Look at me look at me look at me' />
			</View>
		)
	}
})

AppRegistry.registerComponent('AwesomeProject', () => BlinkApp);