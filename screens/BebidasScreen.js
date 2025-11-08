import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import ProductCard from '../components/ProductCard';
import HeaderPage from "../components/HeaderPage";

export default function BebidasScreen({ navigation }) {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProducts() {
      try {
        const res = await fetch('http://localhost:3000/api/products');
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

  const drinks = produtos.filter(
    (item) => item.type.toLowerCase() === "Bebida".toLowerCase()
  );

  if (loading) {
    return (
      <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
        <ActivityIndicator size="large"/>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* HEADER */}  
      <HeaderPage 
        title={'Bebidas'} 
        navigation={navigation}
      />   

      {/* LISTA */}
      <View style={{ padding: 15 }}>
        {drinks.map((item) => (
          <ProductCard key={item.id} item={item}/>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2'
  },
});
