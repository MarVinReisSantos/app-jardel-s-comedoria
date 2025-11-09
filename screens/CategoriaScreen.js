import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import ProductCard from '../components/ProductCard';
import HeaderPage from "../components/HeaderPage";
import { API_URL } from '@env';

export default function CategoriaScreen({ route, navigation }) {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { category } = route.params;

  useEffect(() => {
    async function loadProducts() {
      try {
        const res = await fetch(`${API_URL}/api/products`);
        const data = await res.json();
        setProdutos(data);
      } catch (error) {
        console.log('erro ao buscar produtos =>', error);
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, []);

  const produtosFiltrados = produtos.filter(
    (item) => item.type.toLowerCase() === category.toLowerCase()
  );

  if (loading) {
    return (
      <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
        <ActivityIndicator size="large"/>
      </View>
    );
  }

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