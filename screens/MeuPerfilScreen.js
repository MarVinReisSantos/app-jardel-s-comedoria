import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Modal } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function MeuPerfilScreen() {
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        {/* <Ionicons name="arrow-back" size={22} color="#fff" style={styles.backIcon} /> */}
        <Text style={styles.headerTitle}>Meu Perfil</Text>
      </View>

      {/* User Info */}
      <View style={styles.profileSection}>
        <Image
          source={require('../assets/personal-image.png')} // coloque um ícone genérico aqui
          style={styles.avatar}
        />
        <Text style={styles.name}>Fulano de Tal</Text>
        <Text style={styles.email}>fulano.detal@gmail.com</Text>
      </View>

      {/* Stats */}
      <View style={styles.statsContainer}>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>4</Text>
          <Text style={styles.statLabel}>Pedidos</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>R$ 940,00</Text>
          <Text style={styles.statLabel}>Gasto</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={[styles.statNumber, { color: '#f2c900' }]}>45</Text>
          <Text style={styles.statLabel}>Pontos</Text>
        </View>
      </View>

      {/* Options */}
      <View style={styles.optionsContainer}>
        {[
          { label: 'Endereços', icon: 'location-outline' },
          { label: 'Pagamentos', icon: 'card-outline' },
          { label: 'Notificações', icon: 'notifications-outline' },
          { label: 'Favoritos', icon: 'heart-outline' },
          { label: 'Ajuda', icon: 'help-circle-outline' },
        ].map((item, index) => (
          <TouchableOpacity key={index} style={styles.optionItem}>
            <View style={styles.optionLeft}>
              <Ionicons name={item.icon} size={20} color="#00263D" />
              <Text style={styles.optionLabel}>{item.label}</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#ccc" />
          </TouchableOpacity>
        ))}
      </View>

      {/* Logout Button */}
      <TouchableOpacity style={styles.logoutButton} onPress={() => setShowLogoutModal(true)}>
        <Text style={styles.logoutText}>Sair da conta</Text>
      </TouchableOpacity>

      {/* Logout Modal */}
      <Modal visible={showLogoutModal} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            {/* <Text style={styles.modalTitle}>Cuidado!</Text> */}
            <Text style={styles.modalMessage}>
              Tem certeza que deseja continuar?
            </Text>
            <TouchableOpacity style={styles.btnLogout} onPress={() => setShowLogoutModal(false)}>
              <Text style={styles.btnLogoutText}>Sair da conta</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btnStay}
              onPress={() => setShowLogoutModal(false)}
            >
              <Text style={styles.btnStayText}>Continuar conectado</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    height: 80,
    backgroundColor: '#b18b6b',
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingBottom: 10,
    paddingHorizontal: 15,
  },
  backIcon: {
    marginRight: 10,
  },
  headerTitle: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '600',
  },
  profileSection: {
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: '#fff',
  },
  avatar: {
    width: 80,
    height: 80,
  },
  name: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: '600',
    color: '#00263D',
  },
  email: {
    color: '#777',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 20,
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
  },
  statBox: {
    alignItems: 'center',
  },
  statNumber: {
    fontWeight: '600',
    fontSize: 16,
    color: '#00263D',
  },
  statLabel: {
    fontSize: 13,
    color: '#777',
  },
  optionsContainer: {
    marginTop: 10,
  },
  optionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  optionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionLabel: {
    fontSize: 15,
    marginLeft: 10,
    color: '#00263D',
  },
  logoutButton: {
    backgroundColor: '#fdeaea',
    marginHorizontal: 20,
    marginTop: 30,
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: 'center',
  },
  logoutText: {
    color: '#C42E31',
    fontWeight: '600',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 25,
    borderRadius: 15,
    width: '85%',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#00263D',
    marginBottom: 10,
  },
  modalMessage: {
    color: '#555',
    marginBottom: 20,
  },
  btnLogout: {
    backgroundColor: '#fdeaea',
    paddingVertical: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  btnLogoutText: {
    textAlign: 'center',
    color: '#C42E31',
    fontWeight: '600',
  },
  btnStay: {
    backgroundColor: '#d5f7d9',
    paddingVertical: 10,
    borderRadius: 10,
  },
  btnStayText: {
    textAlign: 'center',
    color: '#0a8a1f',
    fontWeight: '600',
  },
});


// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// export default function MyProfile() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Sobre o App</Text>

//       <Text style={styles.text}>
//         Este aplicativo foi desenvolvido como prática de React Native.
//       </Text>

//       <Text style={styles.text}>
//         Equipe: Arthur Santos e Marcos Vinicius
//       </Text>

//       <Text style={styles.text}>Versão 1.1.0</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#fff',
//     justifyContent: 'flex-start',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 15,
//   },
//   text: {
//     fontSize: 16,
//     marginBottom: 10,
//     lineHeight: 22,
//     color: '#333',
//   },
// });
