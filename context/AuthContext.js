import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { API_URL } from '@env';

export const AuthContext = createContext({});
export const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadStorage();
  }, []);

  async function loadStorage(){
    const storagedUser = await AsyncStorage.getItem("user");
    if(storagedUser){
      setUser(JSON.parse(storagedUser));
    }
    setLoading(false);
  }

  async function signIn(email, password){
    const response = await fetch(`${API_URL}/api/users/login`, {
      method:"POST",
      headers:{ "Content-Type":"application/json" },
      body:JSON.stringify({ email, password })
    });

    const data = await response.json();

    if(!response.ok) throw new Error(data.message);

    await AsyncStorage.setItem("token", data.token);
    await AsyncStorage.setItem("user", JSON.stringify(data.user));
    setUser(data.user); // agora o app inteiro sabe o user
  }

  async function signOut(){
    await AsyncStorage.removeItem("token");
    await AsyncStorage.removeItem("user");
    setUser(null);
  }
  
  async function createAccount(email, password, name){
     const response = await fetch(`${API_URL}/api/users/register`, {
      method:"POST",
      headers:{ "Content-Type":"application/json" },
      body:JSON.stringify({ email, password, name })
    });

    const data = await response.json();

    if(!response.ok) throw new Error(data.message);
  }

  return(
    <AuthContext.Provider value={{
      signed: !!user,
      user,
      loading,
      signIn,
      createAccount,
      signOut
    }}>
      {children}
    </AuthContext.Provider>
  )
}
