import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.title}>Iniciar Sesión</Text>
        <Image source={require('../assets/iconuser.png')} style={styles.icon} />
        <TextInput style={styles.input} placeholder="Correo" placeholderTextColor="#B0B0B0" />
        <TextInput style={styles.input} placeholder="Contraseña" secureTextEntry placeholderTextColor="#B0B0B0" />
        
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Dashboard')}>
          <Text style={styles.buttonText}>Ingresar</Text>
        </TouchableOpacity>
      </View>
      
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.link}>¿No tienes cuenta? Regístrate</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#1E3F20' },
  form: { backgroundColor: '#F3F3F3', padding: 20, borderRadius: 10, width: 300, alignItems: 'center', shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.2, shadowRadius: 4, elevation: 5 },
  icon: { width: 80, height: 80, marginBottom: 20 },
  title: { fontSize: 24, fontWeight: 'bold', color: '#000', marginBottom: 20 },
  input: { width: 260, height: 40, borderColor: '#345830', borderWidth: 1, backgroundColor: '#FFFFFF', color: '#000000', marginBottom: 10, paddingHorizontal: 10, borderRadius: 5 },
  button: { backgroundColor: '#345830', padding: 10, borderRadius: 5, width: 260, alignItems: 'center', marginTop: 10 },
  buttonText: { color: '#F3F3F3', fontWeight: 'bold' },
  link: { color: '#F3F3F3', marginTop: 15, textDecorationLine: 'underline' },
});

export default LoginScreen;
