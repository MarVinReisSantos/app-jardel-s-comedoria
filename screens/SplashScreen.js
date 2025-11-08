import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Image } from 'react-native';

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('MainTabs');
      // navigation.replace('Login');
    }, 2000);
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      {/* Cabeçalho com cor suave */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Jardel's Comedoria</Text>
      </View>

      {/* Conteúdo central */}
      <View style={styles.content}>
        <View style={styles.logoContainer}>
          <View style={styles.logoCircle}>
            <Text style={styles.logoLetter}>J</Text>
          </View>
          <Text style={styles.subtitle}>Sabor e qualidade em cada refeição</Text>
        </View>

        <ActivityIndicator size="large" color="#b37a3c" style={styles.loader} />
      </View>

      {/* Rodapé */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Carregando...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f4ef', // fundo suave
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  header: {
    width: '100%',
    paddingVertical: 40,
    backgroundColor: '#b37a3c', // marrom elegante (inspiração no topo da imagem)
    alignItems: 'center',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
  },
  headerText: {
    color: '#fff',
    fontSize: 26,
    fontWeight: 'bold',
  },
  content: {
    alignItems: 'center',
  },
  logoContainer: {
    alignItems: 'center',
  },
  logoCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
    borderWidth: 2,
    borderColor: '#b37a3c',
    elevation: 3,
  },
  logoLetter: {
    color: '#b37a3c',
    fontSize: 50,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#444',
    fontSize: 14,
    marginTop: 5,
  },
  loader: {
    marginTop: 30,
  },
  footer: {
    paddingBottom: 30,
  },
  footerText: {
    color: '#777',
    fontSize: 14,
  },
});
