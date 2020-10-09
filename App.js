import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';

import ListPage from './pages/ListPage';
import InnerPage from './pages/InnerPage';

const App = createStackNavigator({
    List: { screen: ListPage, navigationOptions:{headerShown: false,} }, 
    Inner: { screen: InnerPage, navigationOptions:{headerShown: false,} }, 
  },
  {
    initialRouteName: 'List',
  }
);
export default createAppContainer(App);