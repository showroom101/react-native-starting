/**
 * @flow
 */

import React from 'react';
import { Button, ScrollView, StyleSheet, Text } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';

import Ionicons from 'react-native-vector-icons/Ionicons';
// import SampleText from './SampleText';


/**
 * Used across examples as a screen placeholder.
 */
import type { Children } from 'react';

const SampleText = ({ children }: { children?: Children }) => (
  <Text style={styles.sampleText}>{children}</Text>
);

const styles = StyleSheet.create({
  sampleText: {
    margin: 14,
  },
});


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
  <MyNavScreen banner="Home Screen" navigation={navigation} />
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
    },
  },
  Profile: {
    screen: MyProfileScreen,
    path: '/people/:name',
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.name}'s Profile!`,
    }),
  },
});

const SettingsTab = StackNavigator({
  Settings: {
    screen: MySettingsScreen,
    path: '/',
    navigationOptions: () => ({
      title: 'Settings',
    }),
  },
  NotifSettings: {
    screen: MyNotificationsSettingsScreen,
    navigationOptions: {
      title: 'Notifications',
    },
  },
});

const ChatTab = StackNavigator({
  ChatTab: {
    screen: MyChatScreen,
    path: '/',
    navigationOptions: () => ({
      title: 'Jaaui',
    }),
  },
  GroupsChatTab: {
    screen: MyChatGroupScreen,
    navigationOptions: {
      title: 'Chat',
    },
  },
  ImagesTab: {
    screen: MyProfileScreen,
    navigationOptions: {
      title: 'Toon',
    },
  },
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
            size={26}
            style={{ color: tintColor }}
          />
        ),
      },
    },
    ChatTab: {
      screen: ChatTab,
      path: '/chat',
      navigationOptions: {
        tabBarLabel: 'Chat',
        tabBarIcon: ({ tintColor, focused }) => (
          <Ionicons
            name={focused ? 'ios-chatbubbles' : 'ios-chatbubbles-outline'}
            size={26}
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
            size={26}
            style={{ color: tintColor }}
          />
        ),
      },
    },
  },
  {
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
  }
);

export default StacksInTabs;
