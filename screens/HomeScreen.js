import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { produtos } from '../data/produtos';
import ProductCard from '../components/ProductCard';
import ProductCategory from '../components/ProductCategory';

export default function HomeScreen({ navigation }) {
  const popularItems = produtos.filter(
    (item) => item.popular === true
  );

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
      <ProductCategory navigation={navigation}/>

      {/* Popular Items */}
      <Text style={styles.sectionTitle}>Populares da Casa</Text>
      <View style={styles.popularContainer}>
        {popularItems.map((item) => (
          <ProductCard key={item.id} item={item}/>
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
    position: 'sticky',
    zIndex: 1,
    top: 0,
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
  popularContainer: {
    paddingHorizontal: 15,
    marginBottom: 30,
  },
});
