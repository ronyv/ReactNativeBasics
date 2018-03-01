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
import Swipeout from 'react-native-swipeout';
import Swipeable from 'react-native-swipeable';

import { joyride, joyridable, JoyrideStep } from 'react-native-joyride';

const JoyrideText = joyridable(Text);

const leftContent = <Text>Pull to activate</Text>;

const rightButtons = [
  <TouchableHighlight><Text>Button 1</Text></TouchableHighlight>,
  <TouchableHighlight><Text>Button 2</Text></TouchableHighlight>
];


const instructions = Platform.select({
  ios: 'Go to screen 2 while the data is loading and see the data getting received whereever it is subscribed to. Redux implementation with react native router flux. ',
  android: 'Go to screen 2 while the data is loading and see the data getting received whereever it is subscribed to. Redux implementation with react native router flux. ',
});

class SmoothSwipeList extends Component<{}> {

  constructor(props){
    super(props);
    console.log("LIFECYCLE","--> constructor()");
    console.log("Launcher","Received props : "+JSON.stringify(this.props));

    this.state = {counterItem:0};
  }

  componentWillMount(){
    console.log("LIFECYCLE","--> componentWillMount()");
  }

  componentDidMount(){
    console.log("LIFECYCLE","--> componentDidMount()");
  }


  initial(){
    console.log("LIFECYCLE","--> initial()");
  }

  MyListItem() {
    return (
      <Swipeable
        leftContent={leftContent}
        rightButtons={rightButtons}
        leftActionActivationDistance= {80}
        leftButtonWidth={50}
        onLeftActionRelease={()=>{console.log("LEFT RELEASED.....>>>>>>")}}>
          <View style={styles.swipableText}>
            <Text style={styles.simpleText}>Swipable Library</Text>
          </View>
      </Swipeable>
    );
  }

  render() {
      console.log("LIFECYCLE","--> render()");
      // Buttons
      var swipeoutBtns = [
        {
          text: 'Button'
        }
      ]

    return (
      <View style={styles.container}>

      <JoyrideStep text="This is a hello world example!" order={1} name="hello">
        <JoyrideText>Hello Rony....!</JoyrideText>
      </JoyrideStep>



        <Text style={styles.welcome}>
          Redux implementation with Thunk Middleware
        </Text>
        <Text style={styles.instructions}>
          Make sure you have active internet connectivity.
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
        {this.MyListItem()}
          <View>


            <Swipeout right={swipeoutBtns} buttonWidth={70}>
              <View style={styles.swipableText}>
                <Text style={styles.simpleText}>Swipe me left : react-native-swipeout</Text>
              </View>
            </Swipeout>

            </View>

        <Button onPress={()=> Alert.alert("alert")} title="Check!" />

      </View>

    );
  }
}
export default joyride()(SmoothSwipeList)

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
  swipableText:{
    padding: 10,
    backgroundColor: '#000',
  },
  simpleText: {
    color:'#fff',
  },
});
