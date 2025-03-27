import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [focusedInput, setFocusedInput] = useState(null);

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Image 
          source={require('../assets/iconuser.png')} 
          style={styles.icon} 
        />
        
        <Text style={styles.title}>Bienvenido</Text>
        <Text style={styles.subtitle}>Inicia sesión para continuar</Text>
        
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Correo electrónico</Text>
          <TextInput 
            style={[
              styles.input, 
              focusedInput === 'email' && styles.inputFocused
            ]} 
            placeholder="tucorreo@ejemplo.com" 
            placeholderTextColor="#B0B0B0"
            value={email}
            onChangeText={setEmail}
            onFocus={() => setFocusedInput('email')}
            onBlur={() => setFocusedInput(null)}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>
        
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Contraseña</Text>
          <TextInput 
            style={[
              styles.input, 
              focusedInput === 'password' && styles.inputFocused
            ]} 
            placeholder="••••••••" 
            secureTextEntry 
            placeholderTextColor="#B0B0B0"
            value={password}
            onChangeText={setPassword}
            onFocus={() => setFocusedInput('password')}
            onBlur={() => setFocusedInput(null)}
          />
        </View>

        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate('Dashboard')}
          activeOpacity={0.8}
        >
          <Text style={styles.buttonText}>Ingresar</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.footer}>
        <Text style={styles.footerText}>¿No tienes una cuenta?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={styles.footerLink}>Regístrate</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#d5e2d4',
    paddingHorizontal: 20,
  },
  form: { 
    backgroundColor: '#D9D9D9', 
    padding: 30, 
    borderRadius: 20, 
    width: '100%', 
    maxWidth: 400,
    alignItems: 'center', 
    shadowColor: '#2c3e50',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 10,
  },
  icon: { 
    width: 80, 
    height: 80, 
    marginBottom: 15,
    tintColor: '#345830',
  },
  title: { 
    fontSize: 28, 
    fontWeight: '700', 
    color: '#2c3e50', 
    marginBottom: 5,
    fontFamily: 'sans-serif-medium',
  },
  subtitle: {
    fontSize: 14,
    color: '#7f8c8d',
    marginBottom: 25,
    fontFamily: 'sans-serif',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 15,
  },
  inputLabel: {
    color: '#2c3e50',
    marginBottom: 5,
    fontSize: 14,
    fontWeight: '500',
  },
  input: { 
    width: '100%', 
    height: 50, 
    borderColor: '#dfe6e9', 
    borderWidth: 1, 
    backgroundColor: '#f5f6fa', 
    color: '#2c3e50', 
    paddingHorizontal: 15, 
    borderRadius: 10,
    fontSize: 15,
  },
  inputFocused: {
    borderColor: '#345830',
    backgroundColor: '#ffffff',
    shadowColor: '#345830',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  button: { 
    backgroundColor: '#345830', 
    padding: 15, 
    borderRadius: 10, 
    width: '100%', 
    alignItems: 'center', 
    marginTop: 10,
    shadowColor: '#345830',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
  },
  buttonText: { 
    color: '#ffffff', 
    fontWeight: '600',
    fontSize: 16,
    letterSpacing: 0.5,
  },
  footer: {
    flexDirection: 'row',
    marginTop: 25,
    alignItems: 'center',
  },
  footerText: {
    color: '#7f8c8d',
    marginRight: 5,
  },
  footerLink: {
    color: '#345830',
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;