import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const UserScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Usuario</Text>

      {/* Contenedor único para la información del usuario y las acciones */}
      <View style={styles.userInfoContainer}>
        {/* Imagen de perfil en círculo */}
        <Image source={require('../assets/iconuser.png')} style={styles.profileImage} />
        <Text style={styles.text}>Nombre: Juan Pérez</Text>
        <Text style={styles.text}>Correo: juan.perez@example.com</Text>

        {/* Acciones que el usuario puede realizar */}
        <View style={styles.actionsContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Actualizar Perfil</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Cambiar Contraseña</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Configuraciones de Notificaciones</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Preferencias de Usuario</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Ver Información del Dispositivo</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Cerrar Sesión</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#1E3F20', padding: 20 },
  title: { fontSize: 24, color: '#F3F3F3', fontWeight: 'bold', marginBottom: 20 },

  // Estilo para el contenedor único que envuelve la información y acciones
  userInfoContainer: { 
    backgroundColor: '#345830', 
    padding: 20, 
    borderRadius: 10, 
    alignItems: 'center', 
    marginBottom: 20 
  },
  profileImage: { 
    width: 100, 
    height: 100, 
    borderRadius: 50, 
    marginBottom: 15 
  },
  text: { fontSize: 16, color: '#F3F3F3', marginVertical: 5 },

  // Estilo para las acciones del usuario
  actionsContainer: { 
    flexDirection: 'column', 
    alignItems: 'center' 
  },
  button: { 
    backgroundColor: '#27AE60',  // Botones de color verde
    padding: 10, 
    marginVertical: 10, 
    borderRadius: 5, 
    width: '80%', 
    alignItems: 'center'
  },
  buttonText: { color: '#F3F3F3', fontSize: 16 },
});

export default UserScreen;
