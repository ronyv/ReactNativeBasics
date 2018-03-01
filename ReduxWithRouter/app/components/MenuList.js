/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,FlatList,
  View, TouchableOpacity,Alert
} from 'react-native';
import Toast, {DURATION} from 'react-native-easy-toast';
// 3rd party libraries
import { Actions } from 'react-native-router-flux';


import { connect } from 'react-redux';
import { fetchData } from '../redux/actions';

import Swipeout from 'react-native-swipeout';

import { GoogleAnalyticsTracker } from "react-native-google-analytics-bridge";
let gaTracker = new GoogleAnalyticsTracker('UA-114968469-1');

const itemsList = ["ReduxTest","Tabbar",
                  "SearchFilter",
                  "WebsocketsDemo","ViewPagerClass",
                  "LightBox","HighchartWrapper","RealtimeChart","DynamicGraphs",
                  "SmoothSwipeList"];

const Orientation = require('react-native-orientation');

class App extends Component<{}> {

  constructor(props){
    super(props);

    console.log("MenuList","Props : "+JSON.stringify(this.props));

  }

  _onLayout(evt){
    var height = evt.nativeEvent.layout.height;
    var width = evt.nativeEvent.layout.width;
    // do something with these values...
    console.log("onLayout","height : "+height +" |||| width : "+width);
    }
  componentWillMount(){
    var initial = Orientation.getInitialOrientation();

    Orientation.getOrientation((err,initial)=> {
      //console.log("Current Device Orientation: ", orientation);
         this.refs.toast.show('Current orientation : '+initial,DURATION.LENGTH_SHORT);
         if (initial === 'PORTRAIT') {
           //do stuff
           console.log("componentWillMount","PORTRAIT");
         } else {
           //do other stuff
           console.log("componentWillMount","LANDSCAPE");
         }
    });

  }

  componentDidMount(){

    //tract the user
    gaTracker.trackScreenView("MenuList");

    Orientation.addOrientationListener(function(orientation){
        console.log("addOrientationListener","Orientation changed : to : "+orientation);
        console.log("Props : "+JSON.stringify(Actions.currentScene));
        if(Actions.currentScene=='menulist'){
          Alert.alert("orientation changed to "+orientation);
        }

    });
    console.log("componentDidMount","addOrientationListener : success");
  }

  componentWillUnmount() {
    console.log("Inside componentWillUnmount >>");
    /*Orientation.getOrientation((err,orientation)=> {
      console.log("Current Device Orientation: ", orientation);
    });*/
    Orientation.removeOrientationListener(function(orientation){
      console.log("removeOrientationListener: Success : "+orientation);
    });
  }

  _orientationDidChange(orientation) {
    if (orientation == 'LANDSCAPE') {
      //do something with landscape layout
      console.log("_orientationDidChange","LANDSCAPE");
    } else {
      //do something with portrait layout
      console.log("_orientationDidChange","PORTRAIT");
    }
  }

  goToComponent(componentName){
    console.log("MenuList","Selected component : "+componentName);

      switch (componentName) {
        case "ReduxTest":
          Actions.launcher();
          break;
        case "Tabbar":
          Actions.tabbar();
          break;
        case "SearchFilter":
          Actions.searchfilter();
          break;
        case "RealtimeChart":
          Actions.realtimechart();
          break;
        case "WebsocketsDemo":
          Actions.websocketsdemo();
          break;
        case "ViewPagerClass":
          Actions.viewpagerclass();
          break;
        case "LightBox":
          Actions.lightbox();
          break;
        case "HighchartWrapper":
          Actions.highchartwrapper();
          break;
        case "DynamicGraphs":
          Actions.currencypairchart();
          break;
        case "Launcher":
          Actions.launcher();
          break;
        case "RnExceptionHandler":
          Actions.rnexceptionhandler();
          break;
        case "SmoothSwipeList":
          Actions.smoothswipelist();
          break;

        default:

      }

  }

  showMessage(data){
    Alert.alert("Button Clicked: "+data)
  }

  getMethod(data){
    var swipeoutBtns = [
      {
        text: 'Button',
        backgroundColor : '#f90909',
        onPress : () => {this.showMessage(data)}
      }
    ];

    return swipeoutBtns;
  }

  render() {
    return (
      <View style={styles.container} onLayout={this._onLayout}>
        <Text style={styles.welcome}>
          This page is setup with Orientation Listener...!
        </Text>
        <Text style={styles.instructions}>
          Swipe the buttons from right to left to view the option buttons.
        </Text>

        <FlatList data={itemsList}
            keyExtractor={(item, index) => item}
            renderItem={({ item, separators }) =><View >
                        <Swipeout
                            right={this.getMethod(item)}
                            style={{backgroundColor: '#616A6B',margin: 3}}
                            buttonWidth={50}>
                            <View>
                                <TouchableOpacity style={styles.listitem} onPress={() => this.goToComponent(item)}>

                                          <Text style={styles.itemText}>
                                            {item}
                                          </Text>
                                </TouchableOpacity>
                            </View>
                        </Swipeout>
                      </View>
                      }
          />
          <Toast ref="toast"/>
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
    textAlign: 'center',
    color: '#000',
    margin: 10,
  },
  mainContainer: {
    backgroundColor: '#616A6B',
  },
  listitem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#616A6B',
    margin: 3,
    padding: 5
  },
  itemText : {
    color: '#F9FAFA',
    fontWeight: 'bold',
    fontSize: 20,
  },
  instructions: {
    textAlign: 'center',
    color: '#000',
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
    color: 'white'
  },
});


function mapStateToProps (state) {
  return {
    appData: state.appData
  }
}

function mapDispatchToProps (dispatch) {
  return {
    fetchData: () => dispatch(fetchData())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
