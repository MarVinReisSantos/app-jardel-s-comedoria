import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ClientsScreen from '../screens/BebidasScreen';
import RentalsScreen from '../screens/PedidosScreen';
import MyProfile from '../screens/MeuPerfilScreen';
import { Ionicons } from '@expo/vector-icons';
import { View, Text } from 'react-native';
import HomeScreen from '../screens/HomeScreen';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: true,
        tabBarStyle: {
          backgroundColor: '#000', // fundo preto
          borderTopColor: 'transparent',
          height: 60,
          paddingBottom: 5,
          paddingTop: 5,
        },
        tabBarActiveTintColor: '#fff', // ícone ativo branco
        tabBarInactiveTintColor: '#ccc', // ícone inativo cinza claro
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '500',
        },
        tabBarIcon: ({ color, size }) => {
          let iconName;

          switch (route.name) {
            case 'Início':
              iconName = 'home';
              break;
            case 'Bebidas':
              iconName = 'wine';
              break;
            case 'Pedidos':
              iconName = 'cube';
              break;
            case 'Perfil':
              iconName = 'person';
              break;
          }

          return <Ionicons name={iconName} size={22} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Início" component={HomeScreen} />
      <Tab.Screen name="Bebidas" component={ClientsScreen} />
      <Tab.Screen name="Pedidos" component={RentalsScreen} />
      <Tab.Screen name="Perfil" component={MyProfile} />
    </Tab.Navigator>
  );
}
