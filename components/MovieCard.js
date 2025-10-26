import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function MovieCard({ title, description, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image
        source={{ uri: 'https://picsum.photos/200/300?random=' + Math.random() }}
        style={styles.image}
      />
      <View style={styles.info}>
        <Text style={styles.title}>{title}</Text>
        <Text numberOfLines={2} style={styles.desc}>{description}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    margin: 8,
    borderRadius: 8,
    overflow: 'hidden',
    elevation: 3,
  },
  image: {
    width: 100,
    height: 120,
  },
  info: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontWeight: 'bold',
    color: '#00263D',
    marginBottom: 4,
  },
  desc: {
    color: '#555',
  },
});
