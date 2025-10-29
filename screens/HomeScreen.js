import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen({ navigation }) {
  const categories = [
    { id: 1, image: require('../assets/pizza.png') },
    { id: 2, image: require('../assets/burger.png') },
    { id: 3, image: require('../assets/sushi.png') },
    { id: 4, image: require('../assets/pasta.png') },
  ];

  const popularItems = [
    {
      id: 1,
      name: 'Pepperoni Pizza',
      description: 'Traditional Italian pizza with cheese, tomato sauce, stuffed crust, and pepperoni.',
      price: '$8.90',
      type: 'Pizza',
      image: require('../assets/pizza.png'),
    },
    {
      id: 2,
      name: "Jardel's Marinara",
      description: 'House specialty with marinara sauce, grilled steak, lettuce, cheese, and bread.',
      price: '$6.90',
      type: 'Burger',
      image: require('../assets/burger.png'),
    },
    {
      id: 3,
      name: 'Traditional Maki Sushi',
      description: 'Classic Japanese sushi made with seasoned rice and fresh fish.',
      price: '$7.90',
      type: 'Sushi',
      image: require('../assets/sushi.png'),
    },
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.header}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
        <Ionicons name="cart-outline" size={24} color="#fff" />
      </View>

      {/* Banner */}
      <Image
        source={require('../assets/banner.png')}
        style={styles.banner}
        resizeMode="cover"
      />

      {/* Categories */}
      <Text style={styles.sectionTitle}>Categorias</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoryScroll}>
        {categories.map((item) => (
          <TouchableOpacity key={item.id} style={styles.categoryItem}>
            <Image source={item.image} style={styles.categoryImage} />
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Popular Items */}
      <Text style={styles.sectionTitle}>Populares da Casa</Text>
      <View style={styles.popularContainer}>
        {popularItems.map((item) => (
          <View key={item.id} style={styles.popularCard}>
            <Image source={item.image} style={styles.popularImage} />
            <View style={styles.popularInfo}>
              <Text style={styles.popularName}>{item.name}</Text>
              <Text style={styles.popularDescription}>{item.description}</Text>
              <View style={styles.popularFooter}>
                <Text style={styles.popularPrice}>{item.price}</Text>
                <Text style={styles.popularType}>{item.type}</Text>
              </View>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#000',
    paddingTop: 45,
    paddingBottom: 10,
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    width: 90,
    height: 40,
    resizeMode: 'contain',
  },
  banner: {
    width: '100%',
    height: 180,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#00263D',
    marginHorizontal: 15,
    marginTop: 20,
    marginBottom: 10,
  },
  categoryScroll: {
    paddingHorizontal: 10,
  },
  categoryItem: {
    marginRight: 15,
  },
  categoryImage: {
    width: 70,
    height: 70,
    borderRadius: 50,
  },
  popularContainer: {
    paddingHorizontal: 15,
    marginBottom: 30,
  },
  popularCard: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 15,
    flexDirection: 'row',
    padding: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  popularImage: {
    width: 90,
    height: 90,
    borderRadius: 10,
  },
  popularInfo: {
    flex: 1,
    paddingLeft: 10,
    justifyContent: 'space-between',
  },
  popularName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#00263D',
  },
  popularDescription: {
    fontSize: 13,
    color: '#666',
  },
  popularFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  popularPrice: {
    fontSize: 15,
    fontWeight: '600',
    color: '#C42E31',
  },
  popularType: {
    backgroundColor: '#f3f3f3',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
    fontSize: 12,
    color: '#00263D',
  },
});
