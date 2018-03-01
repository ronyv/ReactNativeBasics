/**
 * @author: Rony
 * Reference : https://medium.com/@bosung90/tackling-react-native-navigation-with-react-native-router-flux-and-redux-27fcd86fb2b7
 * Others : https://redux.js.org/docs/basics/Reducers.html
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

// 3rd party libraries
import {
  Actions,
  Router,
  Scene,Stack
} from 'react-native-router-flux';

import { Provider, connect  } from 'react-redux'
import  CardStackStyleInterpolator   from './app/utils/CardStackStyleInterpolator'

// Views
import Launcher from './app/components/Launcher';
import ReduxTest from './app/components/ReduxTest';
import configureStore from './app/redux/configureStore';
import CollapsableView from './app/components/CollapsableView';
import MenuList from './app/components/MenuList';
import SearchFilter from './app/components/SearchFilter';
import RealtimeChart from './app/components/RealtimeChart';
import CurrencyPairChart from './app/components/CurrencyPairChart';
import WebsocketsDemo from './app/components/WebsocketsDemo';
import RnExceptionHandler from './app/components/RnExceptionHandler';
import ViewPagerClass from './app/components/ViewPagerClass';
import LightBox from './app/components/LightBox';
import HighchartWrapper from './app/components/HighchartWrapper';
import SmoothSwipeList from './app/components/SmoothSwipeList';

import TabScreen1 from './app/components/tabbar/TabScreen1';
import TabScreen2 from './app/components/tabbar/TabScreen2';
import TabScreen3 from './app/components/tabbar/TabScreen3';

const TabIcon = './app/assets/mks-logo.png';

const ConnectedRouter = connect()(Router);
const store = configureStore();

const scenes = Actions.create(
        <Stack
            key="root"
            hideNavBar={true}
            >
          <Scene key="launcher" title="Main" component={Launcher} reduxStore={store.getState()}  />
          <Scene key="reduxtest"  title="ReduxTest" direction='vertical' component={ReduxTest}  />
          <Scene key="collapsableview"  title="CollapsableView" direction="left" modal component={CollapsableView} />
          <Scene key="menulist"  title="MenuList" direction="left" modal component={MenuList} initial={true}/>
          <Scene direction="leftToRight" key="searchfilter"  title="SearchFilter" component={SearchFilter} />
          <Scene key="realtimechart"  title="RealtimeChart" direction="left" modal component={RealtimeChart} />
          <Scene key="websocketsdemo"  title="WebsocketsDemo" direction="left" modal component={WebsocketsDemo} />
          <Scene key="viewpagerclass"  title="ViewPagerClass" direction="left" modal component={ViewPagerClass} />
          <Scene key="lightbox"  title="LightBox" direction="left" modal component={LightBox} />
          <Scene key="highchartwrapper"  title="HighchartWrapper" direction="left" modal component={HighchartWrapper} />
          <Scene key="currencypairchart"  title="CurrencyPairChart" direction="left" modal component={CurrencyPairChart} />
          <Scene key="rnexceptionhandler"  title="RnExceptionHandler" direction="left" modal component={RnExceptionHandler} />
          <Scene key="smoothswipelist"  title="SmoothSwipeList" direction="left" modal component={SmoothSwipeList} />

          <Scene
              key="tabbar"
              tabs={true}
              hideNavBar={true}
              tabBarPosition={'bottom'}
              tabBarStyle={{ backgroundColor: '#000000'}}
            >
              {/* Tab and it's scenes */}
              <Scene key="page1" title="ONE" >
                <Scene
                  key="tabbar1"
                  hideNavBar={true}
                  component={TabScreen1}
                />

              </Scene>
              <Scene key="page2" title="TWO" >

                <Scene
                  key="tabbar5"
                  component={TabScreen2}
                  hideNavBar={true}
                />

              </Scene>
              <Scene key="page3" title="THREE" >

                <Scene
                  key="tabbar9"
                  component={TabScreen3}
                  hideNavBar={true}

                />
              </Scene>
              {/* Removed for brevity */}
            </Scene>

        </Stack>
);

const Root = () => (
  <Provider store={store}>
     <ConnectedRouter scenes={scenes}  backAndroidHandler={this.onBackPress} />
  </Provider>
);

onBackPress = () => {
    if (Actions.state.index === 0) {
      return false
    }
    Actions.pop()
    return true
}

export default Root;
