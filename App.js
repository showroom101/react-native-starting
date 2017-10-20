// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// import { Button, Header, Tabs, Tab, Icon } from 'react-native-elements';

// export default class App extends React.Component {
//   render() {
//     return (
//       <Header
//         leftComponent={{ icon: 'menu', color: '#fff' }}
//         centerComponent={{ text: 'MY APP', style: { color: '#fff' } }} 
//         rightComponent={{ icon: 'home', color: '#fff' }}
//         outerContainerStyles={{ backgroundColor: '#3D6DCC' }}
//       />
//     );
//   }
// }


import React from 'react';
import { StyleSheet, AppRegistry, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Hello, Chat App!</Text>
        <Button
          onPress={() => navigate('Chat', { user: 'Lucy' })}
          title="Chat with Lucy"
        />
      </View>
    );
  }
}

class ChatScreen extends React.Component {
  // Nav options can be defined as a function of the screen's props:
  static navigationOptions = ({ navigation }) => ({
    title: `Chat with ${navigation.state.params.user}`,
  });
  render() {
    // The screen's current route is passed in to `props.navigation.state`:
    const { params } = this.props.navigation.state;
    return (
      <View>
        <Text>Chat with {params.user}</Text>
      </View>
    );
  }
}


export const SimpleApp = StackNavigator({
  Home: { screen: HomeScreen },
  Chat: { screen: ChatScreen },
});

export default class App extends React.Component {
  render() {
    return <SimpleApp />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
