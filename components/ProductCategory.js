import React from 'react'
import { ScrollView, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { categories } from '../data/categorias';

export default function ProductCategory({navigation}) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.categoryScroll}
    >
      {categories.map((item) => (
        <TouchableOpacity
          key={item.id}
          style={styles.categoryItem}
          onPress={() =>
            navigation.navigate('Categoria', {
              category:
                item.id === 1 ? 'Pizza' :
                  item.id === 2 ? 'Hambúrguer' :
                    item.id === 3 ? 'Sushi' :
                      'Pasta',
            })
          }
        >
          <Image source={item.image} style={styles.categoryImage} />
        </TouchableOpacity>
      ))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
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
});