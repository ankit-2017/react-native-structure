import React, {Component} from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Icons from 'react-native-vector-icons/MaterialIcons';

import HomeScreen from '_screens/home';
import AboutScreen from '_screens/aboutme';

const TabNavigatorConfig = {
  initialRouteName: 'Home',
  defaultNavigationOptions: ({navigation}) => ({
    tabBarIcon: ({focused, tintColor}) => {
      const {routeName} = navigation.state;
      let IconComponent = Icons;
      let iconName;
      if (routeName === 'Home') {
        iconName = 'home';
      } else if (routeName === 'About') {
        iconName = 'apps';
      }

      return <IconComponent name={iconName} size={17} color={tintColor} />;
    },
  }),

  // header: null,
  // headerMode: 'none',
  tabBarOptions: {
    activeTintColor: '#fff',
    inactiveTintColor: 'gray',
    labelStyle: {
      fontSize: 10,
    },
    tabStyle: {
      backgroundColor: '#069c6a',
      paddingVertical: 2,
    },
  },
};

const RouteConfigs = {
  Home: {
    screen: HomeScreen,
  },
  About: {
    screen: AboutScreen,
  },
};

const AppNavigator = createBottomTabNavigator(RouteConfigs, TabNavigatorConfig);

export default AppNavigator;
