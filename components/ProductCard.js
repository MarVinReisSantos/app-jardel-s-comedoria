import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { formatPrice } from "../utils/common";

export default function ProductCard({ item }) {
  const navigation = useNavigation();

  function goToDetails() {
    navigation.navigate('DetalhesProdutoScreen', { product: item });
  }

  return (
    <TouchableOpacity onPress={goToDetails} key={item.id} style={styles.popularCard}>
      <Image source={item.image} style={styles.popularImage} />
      <View style={styles.popularInfo}>
        <Text style={styles.popularName}>{item.name}</Text>
        <Text style={styles.popularDescription}>{item.description}</Text>
        <View style={styles.popularFooter}>
          <Text style={styles.popularPrice}>{formatPrice(item.price)}</Text>
          <Text style={styles.popularType}>{item.type}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
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
