import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../screens/Home/HomeScreen';
import ImageDetailScreen from '../screens/ImageDetails/ImageDetailScreen';
import FavouritesScreen from '../screens/Favourites/FavouritesScreen';

export const Stack = createStackNavigator();

export const DashboardMainStack: React.FC = () => {
  return (
    <Stack.Navigator key={'HomeNavigator'}>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ImageDetailScreen"
        component={ImageDetailScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="FavouritesScreen"
        component={FavouritesScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
