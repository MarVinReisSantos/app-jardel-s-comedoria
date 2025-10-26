import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, Button } from 'react-native';

export default function ClientsScreen({ navigation }) {
  const [clients, setClients] = useState([
    { id: '1', name: 'Marcos Vinicius' },
    { id: '2', name: 'Ana Souza' },
    { id: '3', name: 'Carlos Lima' },
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Clientes</Text>
      <FlatList
        data={clients}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.name}>{item.name}</Text>
          </View>
        )}
      />
      <Button
        title="Adicionar Cliente"
        onPress={() =>
          navigation.navigate('AddClient', {
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
  item: { padding: 15, borderBottomWidth: 1, borderBottomColor: '#ccc' },
  name: { fontSize: 18 },
});
