import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function BebidasScreen({ navigation }) {

  const drinks = [
    {
      id: 1,
      name: "Refrigerante Guaraná Lata",
      description: "Bebida gelada gaseificada com sabor artificial de guaraná",
      volume: "350ml",
      price: "R$ 7,10",
      image: require('../assets/guarana.png')
    },
    {
      id: 2,
      name: "Refrigerante Coca-Cola Lata",
      description: "Bebida gelada gaseificada com sabor artificial de caramelo",
      volume: "350ml",
      price: "R$ 11,90",
      image: require('../assets/coca.png')
    },
    {
      id: 3,
      name: "Água Mineral sem Gás",
      description: "Água mineral em garrafa cristalina",
      volume: "300ml",
      price: "R$ 5,50",
      image: require('../assets/agua.png')
    },
    {
      id: 4,
      name: "Café Expresso",
      description: "Café expresso feito ao momento",
      volume: "150ml",
      price: "R$ 8,90",
      image: require('../assets/cafe.png')
    },
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      
      {/* HEADER */}  
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={22} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Bebidas</Text>
        <Ionicons name="cart-outline" size={22} color="#000" style={{opacity: 0}}/>
      </View>

      {/* LISTA */}
      <View style={{ padding: 15 }}>
        {drinks.map((item) => (
          <View key={item.id} style={styles.card}>
            <Image source={item.image} style={styles.drinkImage} />

            <View style={{ flex: 1, paddingLeft: 10 }}>
              <Text style={styles.drinkName}>{item.name}</Text>
              <Text style={styles.drinkDesc}>{item.description}</Text>

              <Text style={styles.volume}>{item.volume}</Text>
              <Text style={styles.price}>{item.price}</Text>
            </View>

            <TouchableOpacity style={styles.addBtn}>
              <Ionicons name="add" size={22} color="#fff" />
            </TouchableOpacity>
          </View>
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
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 12,
    marginBottom: 15,
    alignItems: 'center'
  },
  drinkImage: {
    width: 70,
    height: 70,
    borderRadius: 10
  },
  drinkName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#00263D'
  },
  drinkDesc: {
    fontSize: 11,
    color: '#666',
    marginTop: 2
  },
  volume: {
    fontSize: 12,
    color: '#666',
    marginTop: 6
  },
  price: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#C42E31',
  },
  addBtn: {
    width: 32,
    height: 32,
    backgroundColor: '#FF8303',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8
  }
});
