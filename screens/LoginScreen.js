import React, { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { AuthContext } from '../context/AuthContext';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const { signIn } = useContext(AuthContext);

  async function handleLogin(){
    try{
      await signIn(email, senha);
      navigation.navigate('MainTabs');
    }catch(err){
      Alert.alert("Erro", err.message);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Entrar</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#999"
        value={email}
        autoCapitalize="none"
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor="#999"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.linkText}>Não tem conta? Cadastre-se</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({ container:{ flex:1, justifyContent:'center', alignItems:'center', backgroundColor:'#f9f4ef', padding:20 }, title:{ fontSize:28, fontWeight:'bold', marginBottom:20, color:'#b37a3c' }, input:{ width:'90%', height:50, backgroundColor:'#fff', borderRadius:8, paddingHorizontal:15, marginBottom:15, borderColor:'#b37a3c', borderWidth:1 }, button:{ width:'90%', height:50, backgroundColor:'#b37a3c', borderRadius:8, justifyContent:'center', alignItems:'center', marginTop:10 }, buttonText:{ color:'#fff', fontSize:18, fontWeight:'bold' }, linkText:{ marginTop:15, color:'#b37a3c', fontSize:14 } });