import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MovieListScreen from '../screens/MovieListScreen';
import ClientsScreen from '../screens/ClientsScreen';
import RentalsScreen from '../screens/RentalsScreen';
import AboutScreen from '../screens/AboutScreen';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let icon;
          if (route.name === 'Filmes') icon = 'film';
          else if (route.name === 'Clientes') icon = 'people';
          else if (route.name === 'Locações') icon = 'cart';
          else if (route.name === 'Sobre') icon = 'information-circle';
          return <Ionicons name={icon} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Filmes" component={MovieListScreen} />
      <Tab.Screen name="Clientes" component={ClientsScreen} />
      <Tab.Screen name="Locações" component={RentalsScreen} />
      <Tab.Screen name="Sobre" component={AboutScreen} />
    </Tab.Navigator>
  );
}
