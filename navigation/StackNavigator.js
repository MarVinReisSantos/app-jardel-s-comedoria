import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../screens/SplashScreen';
import TabNavigator from './TabNavigator';
import CategoriaScreen from '../screens/CategoriaScreen'
import DetalhesProdutoScreen from '../screens/DetalhesProdutoScreen'

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Splash"
        component={SplashScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="MainTabs"
        component={TabNavigator}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Categoria"
        component={CategoriaScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen 
        name="DetalhesProdutoScreen" 
        component={DetalhesProdutoScreen} 
        options={{ headerShown: false }}
      />

    </Stack.Navigator>
  );
}
