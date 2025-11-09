import React, { useEffect, useState, useContext, useCallback  } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, Modal, ActivityIndicator } from 'react-native';
import HeaderPage from "../components/HeaderPage";
import { formatPrice } from "../utils/common";
import { AuthContext } from '../context/AuthContext';
import { API_URL } from '@env';

export default function PedidosScreen({ navigation }) {
  const [loading, setLoading] = useState(true);
  const [orders, setOrders] = useState([]);
  const { user } = useContext(AuthContext);
  const [visible, setVisible] = useState(false);
  const [action, setAction] = useState(null); 

  const loadOrders = async () => {
    try {
      const res = await fetch(`${API_URL}/api/orders/${user._id}`);
      const data = await res.json();
      setOrders(data);
    } catch (error) {
      console.log('erro ao buscar produtos =>', error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadOrders();
  }, []);

  useFocusEffect(
    useCallback(() => {
      loadOrders(); 
    }, [])
  );

  const total = orders.totalAmount;

  const openModal = (type) => {
    setAction(type);
    setVisible(true);
  };

  const handleConfirmAction = async () => {
    try {
      const res = await fetch(`${API_URL}/api/orders/${user._id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const data = await res.json();
      setOrders([]);
    } catch (error) {
      console.log('erro ao deletar produtos =>', error);
    } finally {
      setLoading(false);
    }

    setVisible(false);
    setAction(null);
  };

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <View>
          <Text style={styles.dateText}>Hoje</Text>
          <Text style={[styles.statusText, getStatusColor(item.status)]}>{item.status}</Text>
        </View>
        <Text style={styles.totalText}>{formatPrice(item.productId.price)}</Text>
      </View>

      <View style={styles.itemsContainer}>
        <View style={styles.itemRow}>
          <Image source={{uri:`${API_URL}/uploads/${item.productId.image}`}} style={styles.itemImage} />
          <Text style={styles.itemName}>{item.productId.name}</Text>
        </View>
      </View>

    </View>
  );

  if (loading) {
    return (
      <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
        <ActivityIndicator size="large"/>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <HeaderPage title={'Meus Pedidos'} navigation={navigation}/> 

      <FlatList
        data={orders.products}
        keyExtractor={(item) => item._id.toString()}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 130, paddingHorizontal: 15,  paddingTop: 20 }}
      />

      {orders?.products === 0 && (
        <View style={{ 
          alignItems: 'center',
          justifyContent: 'center',
          paddingVertical: 40
        }}>
          <Text style={{ 
            fontSize: 16,
            fontWeight: '500',
            color: '#555'
          }}>
            Lista de pedidos vazia.
          </Text>
        </View>
      )}

      {/* BOTÕES GERAIS NO FINAL */}
      {orders?.products?.length > 0 && (
        <View style={styles.bottomButtons}>
          <TouchableOpacity style={[styles.btnGlobal, { backgroundColor:'#2ecc71' }]} onPress={() => openModal("confirm")}>
            <Text style={styles.btnText}>Confirmar Todos</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.btnGlobal, { backgroundColor:'#e74c3c' }]} onPress={() => openModal("cancel")}>
            <Text style={styles.btnText}>Cancelar Todos</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* MODAL */}
      <Modal transparent visible={visible} animationType="fade">
        <View style={styles.overlay}>
          <View style={styles.modalBox}>
            <Text style={styles.modalTitle}>
              {action === "confirm" ? "Confirmar recebimento" : "Cancelar pedidos"}
            </Text>

            <Text style={styles.modalMessage}>
              {action === "confirm" 
                ? `Total a pagar: ${formatPrice(total)}` 
                : "Tem certeza que deseja cancelar todos os pedidos?"}
            </Text>

            <View style={styles.buttons}>
              <TouchableOpacity style={[styles.btn, {backgroundColor:'#ccc'}]} onPress={() => setVisible(false)}>
                <Text style={styles.btnText}>Voltar</Text>
              </TouchableOpacity>

              <TouchableOpacity style={[styles.btn, {backgroundColor:'#2ecc71'}]} onPress={handleConfirmAction}>
                <Text style={styles.btnText}>Confirmar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

    </View>
  );
}


function getStatusColor(status) {
  switch (status) {
    case 'Delivered': return { color: '#2ecc71' };
    case 'Em Andamento': return { color: '#f1c40f' };
    case 'Cancelled': return { color: '#e74c3c' };
    default: return { color: '#999' };
  }
}

const styles = StyleSheet.create({
  container:{flex:1,backgroundColor:'#fafafa'},
  card:{backgroundColor:'#fff',borderRadius:15,padding:15,marginBottom:15,borderWidth:1,borderColor:'#eee',shadowColor:'#000',shadowOpacity:0.05,shadowRadius:5,elevation:1},
  cardHeader:{flexDirection:'row',justifyContent:'space-between',marginBottom:10},
  dateText:{fontSize:14,color:'#666'},
  statusText:{fontSize:14,fontWeight:'600'},
  totalText:{fontSize:16,fontWeight:'700',color:'#C42E31'},
  itemsContainer:{borderTopWidth:1,borderTopColor:'#eee',marginTop:10,paddingTop:10},
  itemRow:{flexDirection:'row',alignItems:'center',marginBottom:8},
  itemImage:{width:40,height:40,borderRadius:8,marginRight:10},
  itemName:{fontSize:14,color:'#00263D'},

  bottomButtons:{
    position:'absolute',
    bottom:20,
    left:15,
    right:15,
    flexDirection:'row',
    justifyContent:'space-between'
  },
  btnGlobal:{flex:1,padding:14,borderRadius:10,alignItems:'center',marginHorizontal:5},
  btnText:{color:'#fff',fontWeight:'600'},

  overlay:{flex:1,backgroundColor:'rgba(0,0,0,0.5)',justifyContent:'center',alignItems:'center'},
  modalBox:{width:'80%',backgroundColor:'#fff',padding:20,borderRadius:12},
  modalTitle:{fontSize:18,fontWeight:'700',marginBottom:10},
  modalMessage:{fontSize:16,marginBottom:25},
  buttons:{flexDirection:'row',justifyContent:'space-between'},
  btn:{flex:1,padding:12,borderRadius:8,alignItems:'center',marginHorizontal:5}
});
