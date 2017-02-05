var React = require('react');
var { AppRegistry, View} = require('react-native');

var FlexDim = React.createClass({
	render: function () {
		return (
			      <View style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: 'powderblue'}} />
        <View style={{flex: 2, backgroundColor: 'skyblue'}} />
        <View style={{flex: 3, backgroundColor: 'steelblue'}} />
      </View>
		)
	}
})

AppRegistry.registerComponent('AwesomeProject', () => FlexDim);