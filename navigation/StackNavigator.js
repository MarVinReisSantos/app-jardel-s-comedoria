import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../screens/SplashScreen';
import TabNavigator from './TabNavigator';
import MovieDetailScreen from '../screens/MovieDetailScreen';
import AddMovieScreen from '../screens/AddMovieScreen'
import AddClientScreen from '../screens/AddClientScreen'

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
        name="AddMovie"
        component={AddMovieScreen}
        options={{ title: 'Adicionar Filme' }}
      />
      
      <Stack.Screen
        name="AddClient"
        component={AddClientScreen}
        options={{ title: 'Adicionar Cliente' }}
      />

      <Stack.Screen
        name="MovieDetail"
        component={MovieDetailScreen}
        options={{
          title: 'Detalhes do Filme',
          headerBackTitle: 'Voltar',
          headerTintColor: '#48b5dc',
          headerTitleAlign: 'center',
        }}
      />
    </Stack.Navigator>
  );
}
