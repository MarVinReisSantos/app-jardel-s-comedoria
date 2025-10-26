import React, { useContext } from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import { FavoritesContext } from '../context/FavoritesContext';

export default function MovieDetailScreen({ route }) {
  const { movie } = route.params;
  const { favorites, toggleFavorite } = useContext(FavoritesContext);
  const isFavorite = favorites.some((f) => f.id === movie.id);

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://picsum.photos/400/300?random=' + movie.id }}
        style={styles.image}
      />
      <Text style={styles.title}>{movie.title}</Text>
      <Text style={styles.body}>{movie.body}</Text>
      <Button
        title={isFavorite ? 'Remover dos Favoritos' : 'Adicionar aos Favoritos'}
        onPress={() => toggleFavorite(movie)}
        color={isFavorite ? 'red' : '#48b5dc'}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  image: { width: '100%', height: 200, borderRadius: 10, marginBottom: 16 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 8 },
  body: { fontSize: 16, color: '#333', marginBottom: 20 },
});
