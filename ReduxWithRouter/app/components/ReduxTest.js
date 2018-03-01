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


import { connect } from 'react-redux';
import { fetchData_0 } from '../redux/actions';

const instructions = "Welcome to this page. We will implement our first Redux application soon...!!";

class App extends Component<{}> {

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

        <TouchableHighlight style={styles.button} onPress={() => this.props.fetchData()}>
          <Text style={styles.buttonText}>Load Data</Text>
        </TouchableHighlight>

        <View >
            {
              this.props.appData.isFetching && <Text>Loading</Text>
            }
            {
              this.props.appData.data.length ? (
                this.props.appData.data.map((person, i) => {
                  return <View key={i} >
                    <Text>Title: {person.title}</Text>
                    <Text>Release Year: {person.releaseYear}</Text>
                  </View>
                })
              ) : null
            }
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
    padding:5
  },
});


function mapStateToProps (state) {
  return {
    appData: state.appData
  }
}

function mapDispatchToProps (dispatch) {
  return {
    fetchData: () => dispatch(fetchData_0())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
