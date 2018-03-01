import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, WebView } from 'react-native';
import ChartView from 'native-highcharts-wrapper';

const Orientation = require('react-native-orientation');
//import  {chartDataJson, dateString2Date} from '../dataprovider/ChartData';

//references
//https://saumya.github.io/ray/articles/71/


//const dygraphHTML = require('../res_charts/dygraph_sample.html');
//const dygraphHTML = require("file:///android_asset/dygraph_sample.html");



export default class CurrencyPairChart extends Component<{}> {

constructor(props){
  super(props);

  //console.log("CP_CHART","BASE DATA : "+JSON.stringify(chartDataJson));
}

componentDidMount(){
  console.log("CPCHART","Inside componentDidMount:");
  Orientation.lockToLandscape(); //this will lock the view to Landscape
}

componentWillUnmount() {
  console.log("CPCHART","Inside componentWillUnmount:");
  Orientation.unlockAllOrientations();
}


getDataForWebView(){
  console.log("CPCHART","Inside getDataForWebView:");
  this.refs.webview.postMessage(JSON.stringify(""));
}

onMessage(event){
  //Prints out data that was passed.
  console.log("DATA--->"+event.nativeEvent.data);
  //console.log("||||--->"+data);
}

render() {

        //http://10.191.0.130/dygraphs/dygraph_sample.html
        //{uri: "file:///android_asset/dygraph_sample.html"}
    return (
          <View   style={{ flex: 1,backgroundColor: '#000'}}>
              <Text style={{textAlign:"center", color:'#c6c386',fontWeight:'bold',fontSize:15}}>
                    DyGraph Example
              </Text>
                    <WebView
                    ref="webview"
                    source={{uri:"file:///android_asset/dygraph_sample.html"}}
                    onLoad={()=> this.getDataForWebView()}
                    onMessage={this.onMessage}
                    style={{height:300,  flex: 1, backgroundColor:'#000'}}
                    javaScriptEnabled={true}
                    setJavaScriptEnabled ={true}
                    domStorageEnabled={true}
                    />
          </View>
    );
}

}

/*

<WebView
  source={{uri: 'http://10.191.0.130/dygraphs/dygraph_sample.html'}}
  style={{ height:250,  flex: 1}}
  javaScriptEnabled={true}
  setJavaScriptEnabled ={true}
  thirdPartyCookiesEnabled={true}
  domStorageEnabled={true}
></WebView>


<ChartView  style={{height:250, flex: 1}}
    config={conf}
    javaScriptEnabled={true}
    setJavaScriptEnabled ={true}
    thirdPartyCookiesEnabled={true}
    domStorageEnabled={true} ></ChartView>


*/
