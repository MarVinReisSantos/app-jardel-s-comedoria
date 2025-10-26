import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('MainTabs');
    }, 2000);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎥 Locadora de Filmes</Text>
      <ActivityIndicator size="large" color="#fff" style={{ marginTop: 20 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#f1c40f',
    fontSize: 28,
    fontWeight: 'bold',
  },
});
