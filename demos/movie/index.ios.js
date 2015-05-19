/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Image,
  Text,
  ListView,
  View,
} = React;

var DATA_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';

var movie = React.createClass({
  getInitialState: function(){
    return {movies:null};
  },
  fetchData: function(){
    fetch(DATA_URL).then((response)=>response.json())
      .then((responseData)=>{
        this.setState({movies: responseData});
      }).done();
  },
  renderMovie: function(){

  },
  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          {}
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('movie', () => movie);
