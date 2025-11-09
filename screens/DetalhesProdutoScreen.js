import React, { useEffect, useState, useContext } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Modal, ActivityIndicator } from "react-native";
import { formatPrice } from "../utils/common";
import HeaderPage from "../components/HeaderPage";
import { AuthContext } from '../context/AuthContext';
import { API_URL } from '@env';

export default function DetalhesProdutoScreen({ route, navigation }) {
  const [loading, setLoading] = useState(true);
  const { product } = route.params;
  const [qty, setQty] = useState(1);
  const [visible, setVisible] = useState(false);
  const [mensagem, setMensagem] = useState('Produto adicionado com sucesso.');
  const [produtos, setProdutos] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    async function loadProducts() {
      try {
        const res = await fetch(`${API_URL}/api/orders`);
        const data = await res.json();
        setProdutos(data);
      } catch (error) {
        console.log('erro ao buscar produtos =>', error);
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, []);

  const handleAdd = async () => {
    try {
      const res = await fetch(`${API_URL}/api/orders`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          userId: user._id,
          productId: product._id,
          quantity: qty
        })
      });

      await res.json();
      setMensagem('Produto adicionado com sucesso.');
    } catch (error) {
      console.log('erro ao inserir pedido =>', error);
      setMensagem('Erro ao adicionar produto.');
    } finally {
      setLoading(false);
      setVisible(true);
    }
  }

  const subtotal = parseFloat(product.price) * qty;

  if (loading) {
    return (
      <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
        <ActivityIndicator size="large"/>
      </View>
    );
  }

  if (loading) {
    return (
      <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
        <ActivityIndicator size="large"/>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: "#F5F5F5" }}>

      {/* HEADER */}
      <HeaderPage 
        title={'Detalhes do Produto'} 
        navigation={navigation}
      />      

      <Image source={{uri:`${API_URL}/uploads/${product.image}`}} style={styles.image} />

      <View style={styles.box}>
        <View style={styles.titlePriceRow}>
          <Text style={styles.productName}>{product.name}</Text>
          <Text style={styles.productPrice}>{formatPrice(product.price)}</Text>
        </View>

        <Text style={styles.descriptionTitle}>Descrição</Text>
        <Text style={styles.descriptionText}>{product.description}</Text>

        <Text style={styles.qtdTitle}>Quantidade</Text>

        <View style={styles.qtdRow}>
          <TouchableOpacity onPress={() => qty > 1 && setQty(qty - 1)} style={styles.qtdBtn}>
            <Text style={styles.qtdBtnText}>-</Text>
          </TouchableOpacity>

          <Text style={styles.qtdNumber}>{qty}</Text>

          <TouchableOpacity onPress={() => setQty(qty + 1)} style={styles.qtdBtn}>
            <Text style={styles.qtdBtnText}>+</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.subRow}>
          <Text style={styles.subLabel}>Subtotal</Text>
          <Text style={styles.subValue}>{formatPrice(subtotal)}</Text>
        </View>

        <View style={styles.subRow}>
          <Text style={styles.subLabel}>Taxa de entrega</Text>
          <Text style={{ color: "green" }}>Grátis</Text>
        </View>

        <TouchableOpacity style={styles.btnAdd} onPress={handleAdd}>
          <Text style={styles.btnAddText}>Adicionar à Sacola</Text>
        </TouchableOpacity>
      </View>

      {/* MODAL */}
      <Modal transparent visible={visible} animationType="fade">
        <View style={styles.modalBG}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>{mensagem}</Text>

            <TouchableOpacity style={styles.modalButton} onPress={() => setVisible(false)}>
              <Text style={styles.modalButtonText}>Ver mais itens</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  image: { width: "100%", height: 250, resizeMode: "cover" },
  box: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: -20,
    padding: 20,
  },
  titlePriceRow: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  productName: { fontSize: 20, fontWeight: "700", color: "#000" },
  productPrice: { fontSize: 18, fontWeight: "700", color: "#1fb900" },
  descriptionTitle: { marginTop: 15, fontSize: 15, fontWeight: "600", color: "#000" },
  descriptionText: { marginTop: 5, color: "#555" },
  qtdTitle: { marginTop: 20, fontWeight: "600", fontSize: 15 },
  qtdRow: { marginTop: 10, flexDirection: "row", alignItems: "center", width: 120, justifyContent: "space-between" },
  qtdBtn: { width: 32, height: 32, borderRadius: 5, borderWidth: 1, borderColor: "#ddd", alignItems: "center", justifyContent: "center" },
  qtdBtnText: { fontSize: 20 },
  qtdNumber: { fontSize: 18, fontWeight: "600" },
  subRow: { flexDirection: "row", justifyContent: "space-between", marginTop: 15 },
  subLabel: { fontWeight: "500", fontSize: 15 },
  subValue: { fontWeight: "600", fontSize: 15 },
  btnAdd: { marginTop: 25, backgroundColor: "#1fb900", paddingVertical: 14, borderRadius: 8, alignItems: "center" },
  btnAddText: { color: "#fff", fontSize: 17, fontWeight: "700" },

  modalBG: { flex: 1, backgroundColor: "rgba(0,0,0,0.5)", alignItems: "center", justifyContent: "center" },
  modalContent: { backgroundColor: "#fff", width: "85%", borderRadius: 12, padding: 20 },
  modalTitle: { fontSize: 18, fontWeight: "700", marginBottom: 10, textAlign:"center" },
  modalText: { color: "#666", textAlign:"center", marginBottom:20 },
  modalButton: { backgroundColor: "#000", padding:12, borderRadius:6, marginBottom:10 },
  modalButtonText: { color:"#fff", fontSize:16, textAlign:"center" }
});
