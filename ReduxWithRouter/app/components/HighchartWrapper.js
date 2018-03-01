import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import ChartView from 'native-highcharts-wrapper';


export default class HighchartWrapper extends Component<{}> {


  render() {
  var Highcharts='Highcharts';
  const exampleConfig = {
      chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: 'pie'
      },
      title: {
          text: 'Browser market shares January, 2015 to May, 2015'
      },
      tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      plotOptions: {
          pie: {
              allowPointSelect: true,
              cursor: 'pointer',
              dataLabels: {
                  enabled: true,
                  format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                  style: {
                      color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                  }
              }
          }
      },
      series: [{
          name: 'Brands',
          colorByPoint: true,
          data: [{
              name: 'Microsoft Internet Explorer',
              y: 56.33
          }, {
              name: 'Chrome',
              y: 24.03,
              sliced: true,
              selected: true
          }, {
              name: 'Firefox',
              y: 10.38
          }, {
              name: 'Safari',
              y: 4.77
          }, {
              name: 'Opera',
              y: 0.91
          }, {
              name: 'Proprietary or Undetectable',
              y: 0.2
          }]
      }]
  }
  return (
    <View>
      <Text>HighchartWrapper - Pie chart</Text>
      <ChartView style={{height:400}} config={exampleConfig}></ChartView>
    </View>

  );
}

}
