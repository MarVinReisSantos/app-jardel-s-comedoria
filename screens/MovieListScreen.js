import React, { useEffect, useState } from 'react';
import { View, FlatList, Button, StyleSheet, Text } from 'react-native';
import MovieCard from '../components/MovieCard';
// import { getFilmes } from '../database/queries';

export default function MovieListScreen({ navigation }) {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    (async () => {
      // await getFilmes(setFilmes);
    })();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Filmes</Text>

      <FlatList
        style={styles.list}
        data={filmes}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <MovieCard
            title={item.titulo}
            description={`${item.genero} - ${item.ano}`}
            onPress={() => navigation.navigate('MovieDetail', { movie: item })}
          />
        )}
      />

      <Button
        title="Adicionar Filme"
        onPress={() =>
          navigation.navigate('AddMovie', {
            onRefresh: async () => await getFilmes(setFilmes),
          })
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  list: { marginTop: 10 },
});
