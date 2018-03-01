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
  Button
} from 'react-native';

// 3rd party libraries
import { Actions } from 'react-native-router-flux';

const instructions = "Welcome to this page. We will implement our first Redux application soon...!!";

export default class App extends Component<{}> {

  constructor(props){
    super(props);

    console.log("ReduxTest","Props : "+JSON.stringify(this.props));

  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to Redux Tutorial!
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
        <Text style={styles.instructions}>
          {(this.props.firstName)? this.props.firstName+" ":"--"} {(this.props.lastName)? this.props.lastName:"--"}
        </Text>
        <Button onPress={()=> Actions.pop()} title="Go Back" />
        <Text style={styles.instructions}>
        </Text>
        <Button onPress={()=> Actions.refresh({firstName:"Rony",lastName:"Varghese"})} title="Refresh page with data" />
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
