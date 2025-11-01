import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import HeaderPage from "../components/HeaderPage";

export default function PedidosScreen({ navigation }) {
  const orders = [
    {
      id: '1',
      date: 'Oct 15, 2025',
      status: 'Delivered',
      total: '$45.90',
      items: [
        { id: '1a', name: 'Pepperoni Pizza', image: require('../assets/pizza.png') },
        // { id: '1b', name: 'Coca-Cola 350ml', image: require('../assets/drink.png') },
      ],
    },
    {
      id: '2',
      date: 'Oct 10, 2025',
      status: 'In progress',
      total: '$29.90',
      items: [
        { id: '2a', name: "Jardel's Marinara", image: require('../assets/burger.png') },
      ],
    },
    {
      id: '3',
      date: 'Oct 01, 2025',
      status: 'Cancelled',
      total: '$32.90',
      items: [
        { id: '3a', name: 'Traditional Maki Sushi', image: require('../assets/sushi.png') },
      ],
    },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      {/* Header */}
      <View style={styles.cardHeader}>
        <View>
          <Text style={styles.dateText}>{item.date}</Text>
          <Text style={[styles.statusText, getStatusColor(item.status)]}>{item.status}</Text>
        </View>
        <Text style={styles.totalText}>{item.total}</Text>
      </View>

      {/* Items */}
      <View style={styles.itemsContainer}>
        {item.items.map((food) => (
          <View key={food.id} style={styles.itemRow}>
            <Image source={food.image} style={styles.itemImage} />
            <Text style={styles.itemName}>{food.name}</Text>
          </View>
        ))}
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <HeaderPage 
        title={'Meu Pedidos'} 
        navigation={navigation}
      /> 

      <FlatList
        data={orders}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 30, paddingHorizontal: 15,  paddingTop: 20 }}
      />

      <View style={styles.footer}>
        <Ionicons name="time-outline" size={20} color="#999" />
        <Text style={styles.footerText}>Você tem {orders.length} pedidos anteriores</Text>
      </View>
    </View>
  );
}

// Helper: color for each status
function getStatusColor(status) {
  switch (status) {
    case 'Delivered':
      return { color: '#2ecc71' };
    case 'In progress':
      return { color: '#f1c40f' };
    case 'Cancelled':
      return { color: '#e74c3c' };
    default:
      return { color: '#999' };
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  backIcon: {
    marginRight: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 40,
    paddingBottom: 15,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    justifyContent: 'space-between'
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000'
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#eee',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 1,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  dateText: {
    fontSize: 14,
    color: '#666',
  },
  statusText: {
    fontSize: 14,
    fontWeight: '600',
  },
  totalText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#C42E31',
  },
  itemsContainer: {
    borderTopWidth: 1,
    borderTopColor: '#eee',
    marginTop: 10,
    paddingTop: 10,
  },
  itemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  itemImage: {
    width: 40,
    height: 40,
    borderRadius: 8,
    marginRight: 10,
  },
  itemName: {
    fontSize: 14,
    color: '#00263D',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  footerText: {
    marginLeft: 6,
    fontSize: 14,
    color: '#888',
  },
});
