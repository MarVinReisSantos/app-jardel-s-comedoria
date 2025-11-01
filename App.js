import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { FavoritesProvider } from './context/FavoritesContext';
import StackNavigator from './navigation/StackNavigator';

export default function App() {
  return (
    <FavoritesProvider>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </FavoritesProvider>
  );
}
