import React, { useContext } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { FavoritesContext } from '../context/FavoritesContext';
import MovieCard from '../components/MovieCard';

export default function FavoritesScreen({ navigation }) {
  const { favorites } = useContext(FavoritesContext);

  if (favorites.length === 0) {
    return (
      <View style={styles.empty}>
        <Text>Nenhum filme favoritado ainda 🎬</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={favorites}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <MovieCard
          title={item.title}
          description={item.body}
          onPress={() => navigation.navigate('MovieDetail', { movie: item })}
        />
      )}
    />
  );
}

const styles = StyleSheet.create({
  empty: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});
