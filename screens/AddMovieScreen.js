import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  Alert, 
  StyleSheet, 
  TouchableOpacity, 
  ActivityIndicator 
} from 'react-native';
// import { addFilme } from '../database/queries';

export default function AddMovieScreen({ navigation, route }) {
  const [titulo, setTitulo] = useState('');
  const [genero, setGenero] = useState('');
  const [ano, setAno] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAdicionar = async () => {
    if (!titulo || !genero || !ano) {
      Alert.alert('Erro', 'Todos os campos são obrigatórios!');
      return;
    }

    const anoInt = parseInt(ano);
    if (isNaN(anoInt)) {
      Alert.alert('Erro', 'Ano inválido!');
      return;
    }

    setLoading(true);
    try {
      // await addFilme(titulo.trim(), genero.trim(), anoInt);
      Alert.alert('Sucesso', `Filme "${titulo}" adicionado!`);
      setTitulo('');
      setGenero('');
      setAno('');

      route.params?.onRefresh?.();
      navigation.goBack();
    } catch (error) {
      console.error(error);
      Alert.alert('Erro', 'Não foi possível adicionar o filme.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Adicionar Filme</Text>

      <TextInput
        style={styles.input}
        placeholder="Título"
        value={titulo}
        onChangeText={setTitulo}
      />

      <TextInput
        style={styles.input}
        placeholder="Gênero"
        value={genero}
        onChangeText={setGenero}
      />

      <TextInput
        style={styles.input}
        placeholder="Ano"
        value={ano}
        onChangeText={setAno}
        keyboardType="numeric"
        maxLength={4}
      />

      <TouchableOpacity 
        style={[styles.button, loading && styles.buttonDisabled]} 
        onPress={handleAdicionar}
        disabled={loading}
      >
        {loading ? <ActivityIndicator color="#fff" /> : <Text style={styles.buttonText}>Adicionar</Text>}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#f9f9f9',
    padding: 12,
    borderRadius: 8,
    fontSize: 16,
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonDisabled: {
    backgroundColor: '#a0c7ff',
  },
  buttonText: { color: '#fff', fontWeight: 'bold', fontSize: 18 },
});
