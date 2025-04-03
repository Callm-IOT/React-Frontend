import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, StatusBar, FlatList, Image, TextInput } from 'react-native';

const PreferencesScreen = ({ navigation }) => {
  // Estado para la lista de usuarios
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedUserId, setSelectedUserId] = useState(null);

  // Datos de ejemplo (en una app real vendrían de tu backend)
  useEffect(() => {
    const mockUsers = [
      { id: '1', name: 'María García', email: 'maria.garcia@example.com', isAdmin: false },
      { id: '2', name: 'Carlos López', email: 'carlos.lopez@example.com', isAdmin: true },
      { id: '3', name: 'Ana Martínez', email: 'ana.martinez@example.com', isAdmin: false },
      { id: '4', name: 'Pedro Sánchez', email: 'pedro.sanchez@example.com', isAdmin: false },
      { id: '5', name: 'Luisa Fernández', email: 'luisa.fernandez@example.com', isAdmin: false },
    ];
    setUsers(mockUsers);
  }, []);

  // Filtrar usuarios según la búsqueda
  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Función para cambiar el rol de administrador
  const toggleAdminStatus = (userId) => {
    setUsers(users.map(user => 
      user.id === userId ? { ...user, isAdmin: !user.isAdmin } : user
    ));
    setSelectedUserId(userId);
  };

  // Función para guardar cambios
  const saveChanges = () => {
    // Aquí iría la lógica para guardar en tu backend
    Alert.alert('Éxito', 'Los cambios se han guardado correctamente', [
      { text: 'OK', onPress: () => navigation.goBack() }
    ]);
  };

  // Renderizar cada item de usuario
  const renderUserItem = ({ item }) => (
    <View style={styles.userItem}>
      <Image 
        source={require('../assets/iconuser.png')} 
        style={styles.userAvatar} 
      />
      <View style={styles.userInfo}>
        <Text style={styles.userName}>{item.name}</Text>
        <Text style={styles.userEmail}>{item.email}</Text>
      </View>
      <TouchableOpacity
        style={[
          styles.adminButton,
          item.isAdmin ? styles.adminButtonActive : styles.adminButtonInactive
        ]}
        onPress={() => toggleAdminStatus(item.id)}
      >
        <Text style={styles.adminButtonText}>
          {item.isAdmin ? 'Quitar Admin' : 'Hacer Admin'}
        </Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar backgroundColor="#345830" barStyle="light-content" />
      <View style={styles.container}>
        {/* Barra superior */}
        <View style={styles.topBar}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image 
              source={require('../assets/icon_arrow_back.png')} 
              style={styles.backIcon} 
            />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Preferencias (Admin)</Text>
        </View>

        {/* Contenido principal */}
        <View style={styles.mainContent}>
          {/* Barra de búsqueda */}
          <View style={styles.searchContainer}>
            <TextInput
              style={styles.searchInput}
              placeholder="Buscar usuarios..."
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
            <Image 
              source={require('../assets/icon_search.png')} 
              style={styles.searchIcon} 
            />
          </View>

          {/* Lista de usuarios */}
          <FlatList
            data={filteredUsers}
            renderItem={renderUserItem}
            keyExtractor={item => item.id}
            contentContainerStyle={styles.userList}
          />

          {/* Botón para guardar cambios */}
          {selectedUserId && (
            <TouchableOpacity 
              style={styles.saveButton}
              onPress={saveChanges}
            >
              <Text style={styles.saveButtonText}>Guardar Cambios</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#345830',
  },
  container: {
    flex: 1,
    backgroundColor: '#d5e2d4',
  },
  topBar: {
    height: 75,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#345830',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  backIcon: {
    width: 24,
    height: 24,
    tintColor: '#F5F5DC',
    marginRight: 15,
    marginTop: 39,
  },
  headerTitle: {
    fontSize: 20,
    color: '#F5F5DC',
    fontWeight: '600',
    marginTop: 39,
  },
  mainContent: {
    flex: 1,
    padding: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#D9D9D9',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    padding: 15,
    fontSize: 16,
    color: '#2c3e50',
  },
  searchIcon: {
    width: 20,
    height: 20,
    tintColor: '#345830',
  },
  userList: {
    paddingBottom: 20,
  },
  userItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#D9D9D9',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
  },
  userAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
    tintColor: '#345830',
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 16,
    color: '#2c3e50',
    fontWeight: 'bold',
  },
  userEmail: {
    fontSize: 14,
    color: '#7f8c8d',
  },
  adminButton: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  adminButtonActive: {
    backgroundColor: '#e74c3c',
  },
  adminButtonInactive: {
    backgroundColor: '#345830',
  },
  adminButtonText: {
    color: '#F5F5DC',
    fontSize: 14,
    fontWeight: '500',
  },
  saveButton: {
    backgroundColor: '#345830',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    marginTop: 10,
  },
  saveButtonText: {
    color: '#F5F5DC',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default PreferencesScreen;