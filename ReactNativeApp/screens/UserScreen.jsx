import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, StatusBar, SafeAreaView } from 'react-native';

const UserScreen = ({ navigation }) => {
  // Datos del usuario actual
  const userData = {
    name: 'Juan Pérez',
    email: 'juan.perez@example.com',
    image: require('../assets/iconuser.png'),
    isAdmin: true // Cambiar según si es administrador o no
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar backgroundColor="#345830" barStyle="light-content" />
      <View style={styles.container}>
        {/* Barra superior con flecha de retroceso */}
        <View style={styles.topBar}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image 
              source={require('../assets/icon_arrow_back.png')} 
              style={styles.backIcon} 
            />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Perfil de Usuario</Text>
        </View>

        {/* Contenido principal */}
        <View style={styles.mainContent}>
          {/* Información del usuario */}
          <View style={styles.userCard}>
            <Image 
              source={userData.image} 
              style={styles.profileImage} 
            />
            <Text style={styles.userName}>{userData.name}</Text>
            <Text style={styles.userEmail}>{userData.email}</Text>
          </View>

          {/* Botones de acciones */}
          <View style={styles.actionsContainer}>
            {/* 1. Botón para Actualizar Perfil */}
            <TouchableOpacity 
              style={[styles.actionButton, styles.firstButton]}
              onPress={() => navigation.navigate('UpdateProfile', {
                currentName: userData.name,
                currentImage: userData.image
              })}
            >
              <Text style={styles.actionButtonText}>Actualizar Perfil</Text>
            </TouchableOpacity>
            
            {/* 2. Botón para Cambiar Contraseña */}
            <TouchableOpacity 
              style={styles.actionButton}
              onPress={() => navigation.navigate('ChangePassword')}
            >
              <Text style={styles.actionButtonText}>Cambiar Contraseña</Text>
            </TouchableOpacity>
            
            {/* 3. Botón para Preferencias (solo visible para admin) */}
            {userData.isAdmin && (
              <TouchableOpacity 
                style={[styles.actionButton, styles.lastButton]}
                onPress={() => navigation.navigate('Preferences')}
              >
                <Text style={styles.actionButtonText}>Preferencias</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

// Los estilos se mantienen igual que en tu código original
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
  userCard: {
    backgroundColor: '#D9D9D9',
    borderRadius: 15,
    padding: 25,
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#2c3e50',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 15,
    tintColor: '#345830',
  },
  userName: {
    fontSize: 20,
    color: '#2c3e50',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  userEmail: {
    fontSize: 16,
    color: '#7f8c8d',
  },
  actionsContainer: {
    backgroundColor: '#D9D9D9',
    borderRadius: 15,
    paddingHorizontal: 15,
    shadowColor: '#2c3e50',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  actionButton: {
    paddingVertical: 18,
    borderBottomWidth: 1,
    borderColor: '#dfe6e9',
  },
  firstButton: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  lastButton: {
    borderBottomWidth: 0,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  actionButtonText: {
    fontSize: 16,
    color: '#2c3e50',
    fontWeight: '500',
  },
});

export default UserScreen;