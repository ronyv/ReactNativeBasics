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
  Button, TextInput
} from 'react-native';

// 3rd party libraries
import { Actions } from 'react-native-router-flux';
import WS from 'react-native-websocket'

const instructions = "Websocket Connection url : ws://echo.websocket.org";

export default class WebsocketsDemo extends Component<{}> {

  constructor(props){
    super(props);
    this.state = { text: '',
                   status: 'Not Connected',
                   message: ''};
    console.log("WebsocketsDemo","Props : "+JSON.stringify(this.props));

  }

  sendWsMessage(){
    console.log("WebsocketsDemo","Inside sendWsMessage() : Sending -> "+this.state.text);
    //setInterval(() => {
      this.ws.send(this.state.text);
      this.setState({message : this.state.message +"\n -> SEND : "+ this.state.text});
    //},5000);


  }

  logMessage(action, message){
      message.map(name => {
               console.log("logMessage : "+name+ " -> "+message[name]);
          })

  }

  onConnectionOpened(status, data){
    console.log("onConnectionStatusChanged"," Data : "+data);
    this.setState({status : status});
  }


    onMessageReceived(data){
      console.log("onMessageReceived"," Data : "+data);
      this.setState({message : this.state.message +"\n ---> "+ data});
    }

  render() {
    return (
      <View style={styles.container}>

          <Text style={styles.instructions}>
            {instructions}
          </Text>

          <Text style={styles.instructions}>
            Connection Status => {this.state.status}
          </Text>

          <TextInput
              style={{height: 40,width:200, borderColor: 'gray', borderWidth: 1, backgroundColor: 'white', margin: 5}}
              onChangeText={(text) => this.setState({text})} placeholder="Enter Message"

          />
          <Button onPress={()=> this.sendWsMessage()}  title="Send Message" />

          <Text style={{color: 'blue', textAlign:'center', flex:1}} >Messages From Websocket Server</Text>

          <Text style={{color: 'black', padding: 10}}> {this.state.message} </Text>

          <View style={{flex: 1}}>
            <WS
              ref={ref => {this.ws = ref}}
              url="ws://echo.websocket.org"
              onOpen={()=> this.onConnectionOpened("CONNECTED","")}
              onMessage={(events) => this.onMessageReceived('RECEIVED : '+ events.data)}
              onError={(data) => this.onConnectionOpened("ERROR",data)}
              onClose={(data) => this.onConnectionOpened("CLOSED",data)}
              reconnect // Will try to reconnect onClose
            />
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
