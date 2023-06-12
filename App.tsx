import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import PetDetails from './src/screens/PetDetails';
import Home from './src/screens/Home';
import Welcome from './src/screens/Welcome';

function App(): JSX.Element {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="welcome">
        <Stack.Screen
          name="pet-detail"
          component={PetDetails}
          initialParams={{id: 1}}
        />
        <Stack.Screen name="welcome" component={Welcome} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
