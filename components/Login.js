import React, { Component } from 'react';
import { Platform, ScrollView, Image, StyleSheet, Text, View, Alert } from 'react-native';
import { Button } from 'react-native-elements';
import Ionicons   from 'react-native-vector-icons/Ionicons';


class LoginScreen extends React.Component {
  constructor(props)  {
    super(props);
  }

  login() {
    const { navigate } = this.props.screenProps.rootNavigation;
    Alert.alert(
        'LoginScreen',
        'Authentication Successfully.',
        [
          {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
          {
            text: 'OK', 
            onPress: () => { 
              navigate('StacksInTabs');
            }
          },
        ],
        { cancelable: false }
      )
  };

  render() {
    return (
      <ScrollView>
        <View style={styles.views}>
          <Text style={styles.title} >Pin Facebook Account.</Text>
        </View>
        <Button
          buttonStyle={styles.btn}
          onPress={() => 
            this.login()
          }
          title="Login"
        />
      </ScrollView>
    )
  }
}

export default LoginScreen;

const styles = StyleSheet.create({
  views: {
    marginTop:100,
    alignItems: 'center',
    padding: 16,
    marginTop: Platform.OS === 'ios' ? 20 : 20,
  },
  image: {
    width: 36,
    height: 36,
    resizeMode: 'contain',
    tintColor: '#fff',
    margin: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    color: '#4e68b9',
    margin: 8,
    marginTop:50
  },
  btn : {
    backgroundColor :'#4e68b9',
    borderRadius:4 
  }
});