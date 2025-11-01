import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { produtos } from '../data/produtos';
import ProductCard from '../components/ProductCard';
import HeaderPage from "../components/HeaderPage";

export default function CategoriaScreen({ route, navigation }) {
  const { category } = route.params;

  const produtosFiltrados = produtos.filter(
    (item) => item.type.toLowerCase() === category.toLowerCase()
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <HeaderPage 
        title={category} 
        navigation={navigation}
      />     

      {/* Listagem */}
      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
        {produtosFiltrados.length === 0 ? (
          <Text style={styles.emptyText}>Nenhum produto encontrado</Text>
        ) : (
          produtosFiltrados.map((item) => (
            <ProductCard key={item.id} item={item}/>
          ))
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  scroll: { padding: 15 },
  emptyText: {
    textAlign: 'center',
    marginTop: 40,
    color: '#666',
    fontSize: 15,
  },
});