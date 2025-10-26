import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

export default function RentalsScreen() {
  const [rentals, setRentals] = useState([
    { id: '1', movie: 'Matrix', client: 'Marcos Vinicius', date: '2025-10-25' },
    { id: '2', movie: 'Inception', client: 'Ana Souza', date: '2025-10-24' },
    { id: '3', movie: 'Avatar', client: 'Carlos Lima', date: '2025-10-23' },
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Locações</Text>
      <FlatList
        data={rentals}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.movie}>{item.movie}</Text>
            <Text style={styles.client}>Cliente: {item.client}</Text>
            <Text style={styles.date}>Data: {item.date}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  item: { padding: 15, borderBottomWidth: 1, borderBottomColor: '#ccc' },
  movie: { fontSize: 18, fontWeight: 'bold' },
  client: { fontSize: 16, marginTop: 5 },
  date: { fontSize: 14, marginTop: 2, color: '#555' },
});
