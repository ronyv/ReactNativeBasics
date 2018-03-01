/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button, TouchableHighlight
} from 'react-native';

// 3rd party libraries
import { Actions } from 'react-native-router-flux';


import { connect } from 'react-redux';
import { fetchData } from '../redux/actions';

const instructions = Platform.select({
  ios: 'Go to screen 2 while the data is loading and see the data getting received whereever it is subscribed to. Redux implementation with react native router flux. ',
  android: 'Go to screen 2 while the data is loading and see the data getting received whereever it is subscribed to. Redux implementation with react native router flux. ',
});

class App extends Component<{}> {

  constructor(props){
    super(props);
    console.log("LIFECYCLE","--> constructor()");
    console.log("Launcher","Received props : "+JSON.stringify(this.props));
  }

  componentWillMount(){
    console.log("LIFECYCLE","--> componentWillMount()");
  }

  componentDidMount(){
    console.log("LIFECYCLE","--> componentDidMount()");
    /*
    setInterval(() => {
        this.props.fetchDataApi("PASS_DATA");
    },3000);
    */
  }

  reduxDataLoad(){
      //setInterval(() => {
          this.props.fetchDataApi("This is some data passed as parameter...!!");
      //},5000);
  }
/*
  getDefaultProps(){
    console.log("LIFECYCLE","--> getDefaultProps()");
  }

  getInitialState(){
    console.log("LIFECYCLE","--> getInitialState()");
  }*/

  initial(){
    console.log("LIFECYCLE","--> initial()");
  }

  shouldComponentUpdate(){
    console.log("LIFECYCLE","--> shouldComponentUpdate()");
    return true;
  }

  componentWillUpdate(){
    console.log("LIFECYCLE","--> shouldComponentUpdate()");
  }

  componentDidUpdate(){
    console.log("LIFECYCLE","--> componentDidUpdate()");
  }

  componentWillReceiveProps(){
    console.log("LIFECYCLE","--> componentWillReceiveProps()");
  }

  componentWillUnmount(){
    console.log("LIFECYCLE","--> componentWillUnmount()");
  }



  render() {
      console.log("LIFECYCLE","--> render()");
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Redux implementation with Thunk Middleware
        </Text>
        <Text style={styles.instructions}>
          Make sure you have active internet connectivity.
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
        <Button onPress={()=> Actions.reduxtest({name:"Kiran"})} title="Goto Screen 2" />

        <TouchableHighlight style={styles.button} onPress={() => this.reduxDataLoad()}>
          <Text style={styles.buttonText}>Load Data</Text>
        </TouchableHighlight>

          <View >
              {
                this.props.appData.isFetching && <Text>Loading</Text>
              }
              {
                this.props.appData.data.length ? (
                  this.props.appData.data.map((person, i) => {
                    return <View key={i} >
                      <Text>Title: {person.title}</Text>
                      <Text>Release Year: {person.releaseYear}</Text>
                    </View>
                  })
                ) : null
              }
          </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
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
  button: {
    height: 60,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0b7eff'
  },
  buttonText: {
    color: 'white',
    padding: 5
  },
});

function mapStateToProps (state) {
  return {
    appData: state.appData
  }
}

function mapDispatchToProps (dispatch) {
  return {
    fetchData: () => dispatch(fetchData()),
    fetchDataApi: (passData) => dispatch(fetchData(passData))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
