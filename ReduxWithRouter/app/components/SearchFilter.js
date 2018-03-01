import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import SearchInput, { createFilter } from 'react-native-search-filter';
//import emails from './mails';
const KEYS_TO_FILTERS = ['user.name', 'subject'];

const emails =  [{
  id: 1,
  user: {
    name: 'Juniper',
  },
  subject: 'Hello World!',
}, {
  id: 2,
  user: {
    name: 'Robert'
  },
  subject: 'React is <3',
}, {
  id: 3,
  user: {
    name: 'you can search for me using a regex : `java$`'
  },
  subject: "What's Up?",
}
  , {
  id: 4,
  user: {
    name: 'Georgia'
  },
  subject: 'How are you today?',
}, {
  id: 5,
  user: {
    name: 'Albert'
  },
  subject: 'Hey!',
}, {
  id: 6,
  user: {
    name: 'Zoey'
  },
  subject: 'React Native!',
}, {
  id: 7,
  user: {
    name: 'Cody'
  },
  subject: 'is super!',
}, {
  id: 8,
  user: {
    name: 'Chili'
  },
  subject: 'Awesome!',
},
  {
  id: 9,
  user: {
    name: 'XAG/USD'
  },
  subject: 'Gold currency!',
}];

export default class App extends Component<{}> {
 constructor(props) {
    super(props);
    this.state = {
      searchTerm: ''
    }
  }
  searchUpdated(term) {
    this.setState({ searchTerm: term })
  }
  render() {
    const filteredEmails = emails.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS));
    console.log("Search result : "+JSON.stringify(filteredEmails));
    return (
      <View style={styles.container}>
        <SearchInput
          onChangeText={(term) => { this.searchUpdated(term) }}
          style={styles.searchInput}
          placeholder="Type a message to search"
          />
        <ScrollView>
          {filteredEmails.map(email => {
            return (
              <TouchableOpacity onPress={()=>alert(email.user.name)} key={email.id} style={styles.emailItem}>
                <View>
                  <Text>{email.user.name}</Text>
                  <Text style={styles.emailSubject}>{email.subject}</Text>
                </View>
              </TouchableOpacity>
            )
          })}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start'
  },
  emailItem:{
    borderBottomWidth: 0.5,
    borderColor: 'rgba(0,0,0,0.3)',
    padding: 10
  },
  emailSubject: {
    color: 'rgba(0,0,0,0.5)'
  },
  searchInput:{
    padding: 10,
    borderColor: '#CCC',
    borderWidth: 1
  }
});
