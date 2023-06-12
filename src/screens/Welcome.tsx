import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from './../screens/Home';
import PetsList from './../screens/PetsList';
import News from './../screens/News';

const Tab = createBottomTabNavigator();

const Welcome = () => {

  return (
    <Tab.Navigator
    initialRouteName="Home"
    screenOptions={({route}) => ({
      tabBarIcon: ({focused, color, size}) => {
        let iconName;
        const {name} = route;
        if (name === 'Home') iconName = focused ? 'home' : 'home-outline';
        if (name === 'Pets') iconName = focused ? 'paw' : 'paw-outline';
        if (name === 'News')
          iconName = focused ? 'newspaper' : 'newspaper-outline';

        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'gray',
      headerShown: false,
    })}>
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Pets" component={PetsList} />
    <Tab.Screen name="News" component={News} />
  </Tab.Navigator>
  )
}

export default Welcome;
