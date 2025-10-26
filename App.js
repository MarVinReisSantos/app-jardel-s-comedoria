import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { FavoritesProvider } from './context/FavoritesContext';
import StackNavigator from './navigation/StackNavigator';
import { initDB } from './database/database';

export default function App() {
  useEffect(() => {
    (async () => {
      await initDB();
    })();
  }, []);

  return (
    <FavoritesProvider>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </FavoritesProvider>
  );
}
