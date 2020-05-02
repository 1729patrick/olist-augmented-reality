import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Products from '../pages/Products';
import ARNavigator from '../pages/ARNavigator';

const Stack = createStackNavigator();

const routes = () => {
  return (
    <Stack.Navigator initialRouteName="Products">
      <Stack.Screen
        name="Products"
        component={Products}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ARNavigator"
        component={ARNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default routes;
