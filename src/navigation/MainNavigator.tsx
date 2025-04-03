import React from 'react';
import {
  NavigationContainer,
  createNavigationContainerRef,
} from '@react-navigation/native';
import { DashboardMainStack } from './StackNavigator';

export const navigationRef = createNavigationContainerRef();

const MainNavigator = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <DashboardMainStack />
    </NavigationContainer>
  );
};

export default MainNavigator;
