/**
 * @flow
 */

import React from 'react';
import { Platform, Button, ScrollView, StyleSheet, Text } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';

import Ionicons from 'react-native-vector-icons/Ionicons';
import SampleText from './SampleText';

const iconSize    = Platform.OS === 'ios' ? 26 : 22;
const headerStyle = {
  marginTop: Platform.OS === 'ios' ? 0 : 25,
};


const iosTabBarOptions = {
    showIcon: true,
    upperCaseLabel: false,
};
const androidTabBarOptions = {
    showIcon: true,
    upperCaseLabel: true,
    style: {
      backgroundColor: '#4586e0',
    },
    indicatorStyle: {
      backgroundColor: '#ffffff'
    },
    labelStyle: {
      fontSize: 10,
      top: 3
    },
    iconStyle :{
      height: 18,
      width : 18,
      top: 7
    },
    tabStyle: {
      height: 45,    
    }
};

/***
 * StacksInTab
 */
const MyNavScreen = ({ navigation, banner }) => (
  <ScrollView>
    <SampleText>{banner}</SampleText>

    <Button
      onPress={() => navigation.navigate('Profile', { name: 'Jordan' })}
      title="Open profile screen"
    />
    <Button
      onPress={() => navigation.navigate('NotifSettings')}
      title="Open notifications screen"
    />
    <Button
      onPress={() => navigation.navigate('GroupsChatTab')}
      title="Go to groups chat tab"
    />
    <Button onPress={() => navigation.goBack(null)} title="Go back" />

  </ScrollView>
);

const MyHomeScreen = ({ navigation }) => (
  <MyNavScreen  banner="Home Screen" navigation={navigation} />
);

const MyProfileScreen = ({ navigation }) => (
  <MyNavScreen
    banner={`${navigation.state.params.name}s Profile`}
    navigation={navigation}
  />
);

const MyNotificationsSettingsScreen = ({ navigation }) => (
  <MyNavScreen banner="Notifications Screen" navigation={navigation} />
);

const MySettingsScreen = ({ navigation }) => (
  <MyNavScreen banner="Settings Screen" navigation={navigation} />
);

const MyChatScreen = ({ navigation }) => (
  <MyNavScreen banner="Hello !! Jaaui" navigation={navigation} />
);

const MyChatGroupScreen = ({ navigation }) => (
  <MyNavScreen banner="Starting chat screen" navigation={navigation} />
);

const MainTab = StackNavigator({
  Home: {
    screen: MyHomeScreen,
    path: '/',
    navigationOptions: {
      title: 'Welcome',
      headerStyle : headerStyle
    },
  },
  Profile: {
    screen: MyProfileScreen,
    path: '/people/:name',
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.name}'s Profile!`,
      headerStyle : headerStyle
    }),
  },
});

const SettingsTab = StackNavigator({
  Settings: {
    screen: MySettingsScreen,
    path: '/',
    navigationOptions: () => ({
      title: 'Settings',
      headerStyle : headerStyle
    }),
  },
  NotifSettings: {
    screen: MyNotificationsSettingsScreen,
    navigationOptions: {
      title: 'Notifications',
      headerStyle : headerStyle
    },
  },
});

const ChatTab = StackNavigator({
  ChatTab: {
    screen: MyChatScreen,
    path: '/',
    navigationOptions: () => ({
      title: 'Jaaui',
      headerStyle : headerStyle
    }),
  },
  GroupsChatTab: {
    screen: MyChatGroupScreen,
    navigationOptions: {
      title: 'Chat',
      headerStyle : headerStyle
    },
  }
});

const StacksInTabs = TabNavigator(
  {
    MainTab: {
      screen: MainTab,
      path: '/',
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({ tintColor, focused }) => (
          <Ionicons
            name={focused ? 'ios-home' : 'ios-home-outline'}
            size={iconSize}
            style={{ color: tintColor }}
          />
        )
      },
    },
    ChatTab: {
      screen: ChatTab,
      path: '/chat',
      navigationOptions: {
        tabBarLabel: 'Chat',
        tabBarIcon: ({ tintColor, focused }) => (
          <Ionicons
            name={focused ? 'ios-pin' : 'ios-pin-outline'}
            size={iconSize}
            style={{ color: tintColor }}
          />
        ),
      },
    },
    SettingsTab: {
      screen: SettingsTab,
      path: '/settings',
      navigationOptions: {
        tabBarLabel: 'Settings',
        tabBarIcon: ({ tintColor, focused }) => (
          <Ionicons
            name={focused ? 'ios-settings' : 'ios-settings-outline'}
            size={iconSize}
            style={{ color: tintColor }}
          />
        ),
      },
    },
  },
  {
    tabBarPosition: 'bottom',
    tabBarOptions : Platform.OS === 'ios'? iosTabBarOptions: androidTabBarOptions,
    animationEnabled: false,
    swipeEnabled: false,
  }
);

export default StacksInTabs;
