/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,Alert,
  View,
  Button, TextInput,Image, Dimensions
} from 'react-native';
import {setJSExceptionHandler, getJSExceptionHandler,
        setNativeExceptionHandler } from 'react-native-exception-handler';
// 3rd party libraries
import { Actions } from 'react-native-router-flux';

const instructions = "Click the button to create an Exception.";

// getJSExceptionHandler gives the currently set JS exception handler

const reporter = (error) => {
  // Logic for reporting to devs
  // Example : Log issues to github issues using github apis.
  console.log(error); // sample
};

const errorHandler = (e, isFatal) => {
  if (isFatal) {
    reporter(e);
    Alert.alert(
        'Unexpected error occurred',
        `
        Error: ${(isFatal) ? 'Fatal:' : ''} ${e.name} ${e.message}

        We have reported this to our team ! Please close the app and start again!
        `,
      [{
        text: 'Close',
        onPress: () => {
          BackAndroid.exitApp();
        }
      }]
    );
  } else {
    console.log(e); // So that we can see it in the ADB logs in case of Android if needed
  }
};

setJSExceptionHandler(errorHandler);

setNativeExceptionHandler(errorHandler, false);

export default class RnExceptionHandler extends Component<{}> {

  constructor(props){
    super(props);
    this.state = { };
    console.log("RnExceptionHandler","Props : "+JSON.stringify(this.props));

  }


  componentWillMount(){
    // registering the error handler (maybe u can do this in the index.android.js or index.ios.js)
  /*
  setJSExceptionHandler((error, isFatal) => {
    // This is your custom global error handler
    // You do stuff like show an error dialog
    // or hit google analytics to track crashes
    // or hit a custom api to inform the dev team.
    Alert.alert("JSExceptionHandler Invoked");
  });

  setNativeExceptionHandler((exceptionString) => {
    // This is your custom global error handler
    // You do stuff likehit google analytics to track crashes.
    // or hit a custom api to inform the dev team.
    //NOTE: alert or showing any UI change via JS
    //WILL NOT WORK in case of NATIVE ERRORS.
    console.log("YAHOO");
    Alert.alert("NativeExceptionHandler Invoked");
  });
*/
  }

  thereIsNoMethodLikeThis(){
    abc.length;
  }


  render() {
    return (
      <View style={styles.container} >

        <Text style={styles.welcome}>
          Global Exception Handler
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>

        <Button onPress={()=> this.thereIsNoMethodLikeThis()} title="Click for Exception" />

        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ADAE63',
  },
  contain: {
    flex: 1,
    height: 150,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'left',
    color: '#FFFFFF',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
