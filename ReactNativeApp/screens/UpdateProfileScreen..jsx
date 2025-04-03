import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, SafeAreaView, StatusBar, Alert } from 'react-native';

const UpdateProfileScreen = ({ navigation, route }) => {
  // Obtenemos los datos actuales del usuario desde los parámetros de navegación
  const { currentName, currentImage } = route.params;
  
  // Estado para el nombre editado
  const [name, setName] = useState(currentName);
  
  // Función para guardar los cambios
  const handleSave = () => {
    if (!name.trim()) {
      Alert.alert('Error', 'El nombre no puede estar vacío');
      return;
    }
    
    // Aquí iría la lógica para guardar en tu backend
    // Por ahora solo mostramos un mensaje y volvemos atrás
    Alert.alert('Éxito', 'Perfil actualizado correctamente', [
      { text: 'OK', onPress: () => navigation.goBack() }
    ]);
  };

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
          <Text style={styles.headerTitle}>Editar Perfil</Text>
        </View>

        {/* Contenido principal */}
        <View style={styles.mainContent}>
          {/* Foto de perfil (solo visualización) */}
          <View style={styles.profileImageContainer}>
            <Image 
              source={currentImage} 
              style={styles.profileImage} 
            />
          </View>
          
          {/* Formulario de edición */}
          <View style={styles.formContainer}>
            <Text style={styles.label}>Nombre</Text>
            <TextInput
              style={styles.input}
              value={name}
              onChangeText={setName}
              placeholder="Ingresa tu nombre"
              autoCapitalize="words"
            />
            
            <TouchableOpacity 
              style={styles.saveButton}
              onPress={handleSave}
            >
              <Text style={styles.saveButtonText}>Guardar Cambios</Text>
            </TouchableOpacity>
          </View>
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
    alignItems: 'center',
  },
  profileImageContainer: {
    marginBottom: 30,
    alignItems: 'center',
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: '#345830',
  },
  formContainer: {
    width: '100%',
    backgroundColor: '#D9D9D9',
    borderRadius: 15,
    padding: 20,
    shadowColor: '#2c3e50',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  label: {
    fontSize: 16,
    color: '#2c3e50',
    marginBottom: 8,
    fontWeight: '500',
  },
  input: {
    backgroundColor: '#F5F5DC',
    borderRadius: 10,
    padding: 15,
    fontSize: 16,
    color: '#2c3e50',
    marginBottom: 25,
    borderWidth: 1,
    borderColor: '#dfe6e9',
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

export default UpdateProfileScreen;