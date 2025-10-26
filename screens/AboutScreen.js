import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sobre o App</Text>

      <Text style={styles.text}>
        Este aplicativo foi desenvolvido como prática de React Native.
      </Text>

      <Text style={styles.text}>
        Equipe: Arthur Santos e Marcos Vinicius
      </Text>

      <Text style={styles.text}>Versão 1.1.0</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
    lineHeight: 22,
    color: '#333',
  },
});
