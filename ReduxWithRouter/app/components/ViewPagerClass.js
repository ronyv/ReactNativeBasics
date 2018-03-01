import React, { Component,PureComponent } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';

import { TabbedPager, ViewPager } from 'react-native-viewpager-carousel'

export default class ViewPagerClass extends Component {

    constructor(props) {
        super(props);
        this.data = [
            { title: 'title 1', url: 'http://46.235.34.202:8080/pricegraph/FTP_PRICE_GRAPH/mktfeedchart_1_XAU-USD.png' },
            { title: 'title 2', url: 'http://46.235.34.202:8080/pricegraph/FTP_PRICE_GRAPH/mktfeedchart_2_XAU-USD.png' },
            { title: 'title 3', url: 'http://46.235.34.202:8080/pricegraph/FTP_PRICE_GRAPH/mktfeedchart_3_XAU-USD.png' },
        ]
    }

    _renderTab = ({data}) => {
        return ( <Text>{data.title}</Text> )
    }

    _renderPage = ({data}) => {
        return ( <Image source={{uri: data.url}} /> )
    }

    render() {
      return ( <TabbedPager
          data={this.data}
          tabContainerPosition='bottom'
          renderTab={this._renderTab}
          renderPage={this._renderPage}
      /> );

    }
}
