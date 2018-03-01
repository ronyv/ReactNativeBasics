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
  Button, TextInput,Image, Dimensions
} from 'react-native';

import ImageZoom from 'react-native-image-pan-zoom';

// 3rd party libraries
import { Actions } from 'react-native-router-flux';
import WS from 'react-native-websocket'

const instructions = "Websocket Connection url : ws://echo.websocket.org";


export default class WebsocketDemo2 extends Component<{}> {

  constructor(props){
    super(props);
    this.state = { imageWidth: 200,
                   imageHeight: 200,
                   resizeMode:'contain'};
    console.log("WebsocketsDemo","Props : "+JSON.stringify(this.props));

  }

  _onLayout(evt){
    var height = evt.nativeEvent.layout.height;
    var width = evt.nativeEvent.layout.width;
    // do something with these values...
    console.log("onLayout","height : "+height +" |||| width : "+width);

      if(width > height){
        this.setState({imageWidth: width,
                       imageHeight: height,
                       resizeMode:'stretch'});
      }else{
        this.setState({imageWidth: width,
                       imageHeight: height,
                       resizeMode:'contain'});
      }

    }

  render() {
    return (
      <View style={styles.container} onLayout={this._onLayout.bind(this)}>

            <ImageZoom cropWidth={Dimensions.get('window').width}
                     cropHeight={Dimensions.get('window').height}
                     imageWidth={this.state.imageWidth}
                     imageHeight={this.state.imageHeight}>
              <Image style={{width:this.state.imageWidth, height:this.state.imageHeight, resizeMode:this.state.resizeMode}}
                     source={{uri:'http://46.235.34.202:8080/pricegraph/FTP_PRICE_GRAPH/mktfeedchart_1_XAU-USD.png'}}/>
          </ImageZoom>

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
