import React, { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { AuthContext } from '../context/AuthContext';

export default function RegisterScreen({ navigation }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const { createAccount } = useContext(AuthContext);

  const handleRegister = async () => {
    if (!nome || !email || !senha) {
      Alert.alert('Atenção', 'Preencha todos os campos');
      return;
    }

    try {
      await createAccount(email, senha, nome);
      Alert.alert('Sucesso', 'Usuário criado com sucesso!');
      navigation.navigate('Login');

    } catch (err) {
      console.log(err.response?.data || err);
      Alert.alert('Erro', 'Não foi possível criar o usuário');
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Criar Conta</Text>

      <TextInput style={styles.input} placeholder="Nome" placeholderTextColor="#999" value={nome} onChangeText={setNome}/>
      <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#999" autoCapitalize="none" value={email} onChangeText={setEmail}/>
      <TextInput style={styles.input} placeholder="Senha" placeholderTextColor="#999" secureTextEntry value={senha} onChangeText={setSenha}/>

      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.linkText}>Já tem conta? Fazer login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{ flex:1, justifyContent:'center', alignItems:'center', backgroundColor:'#f9f4ef', padding:20 },
  title:{ fontSize:28, fontWeight:'bold', marginBottom:20, color:'#b37a3c' },
  input:{ width:'90%', height:50, backgroundColor:'#fff', borderRadius:8, paddingHorizontal:15, marginBottom:15, borderColor:'#b37a3c', borderWidth:1 },
  button:{ width:'90%', height:50, backgroundColor:'#b37a3c', borderRadius:8, justifyContent:'center', alignItems:'center', marginTop:10 },
  buttonText:{ color:'#fff', fontSize:18, fontWeight:'bold' },
  linkText:{ marginTop:15, color:'#b37a3c', fontSize:14 }
});
