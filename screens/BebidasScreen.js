import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { produtos } from '../data/produtos';
import ProductCard from '../components/ProductCard';
import HeaderPage from "../components/HeaderPage";

export default function BebidasScreen({ navigation }) {

  const drinks = produtos.filter(
    (item) => item.type.toLowerCase() === "Bebida".toLowerCase()
  );

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
