import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, KeyboardAvoidingView, Platform } from 'react-native';

const RegisterScreen = ({ navigation }) => {
  const [datosFormulario, setDatosFormulario] = useState({
    nombre: '',
    apellidos: '',
    fechaNacimiento: '',
    telefono: '',
    correo: '',
    nombreUsuario: '',
    contrasena: '',
    confirmarContrasena: ''
  });
  const [inputEnfocado, setInputEnfocado] = useState(null);

  const manejarCambioInput = (nombre, valor) => {
    setDatosFormulario({
      ...datosFormulario,
      [nombre]: valor
    });
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.contenedorPrincipal}
    >
      <View style={styles.contenedor}>
        <View style={styles.formulario}>
          <Image 
            source={require('../assets/iconuser.png')} 
            style={styles.icono} 
          />
          
          <Text style={styles.titulo}>Crear Cuenta</Text>
          <Text style={styles.subtitulo}>Completa tus datos para registrarte</Text>
          
          {/* Primera fila - Nombre y Apellidos */}
          <View style={styles.filaInputs}>
            <View style={[styles.contenedorInput, { flex: 1, marginRight: 8 }]}>
              <Text style={styles.etiquetaInput}>Nombre</Text>
              <TextInput 
                style={[
                  styles.inputCompacto, 
                  inputEnfocado === 'nombre' && styles.inputEnfocado
                ]} 
                placeholder="Tu nombre" 
                placeholderTextColor="#B0B0B0"
                value={datosFormulario.nombre}
                onChangeText={(texto) => manejarCambioInput('nombre', texto)}
                onFocus={() => setInputEnfocado('nombre')}
                onBlur={() => setInputEnfocado(null)}
              />
            </View>
            
            <View style={[styles.contenedorInput, { flex: 1 }]}>
              <Text style={styles.etiquetaInput}>Apellidos</Text>
              <TextInput 
                style={[
                  styles.inputCompacto, 
                  inputEnfocado === 'apellidos' && styles.inputEnfocado
                ]} 
                placeholder="Tus apellidos" 
                placeholderTextColor="#B0B0B0"
                value={datosFormulario.apellidos}
                onChangeText={(texto) => manejarCambioInput('apellidos', texto)}
                onFocus={() => setInputEnfocado('apellidos')}
                onBlur={() => setInputEnfocado(null)}
              />
            </View>
          </View>
          
          {/* Segunda fila - Fecha Nacimiento y Teléfono */}
          <View style={styles.filaInputs}>
            <View style={[styles.contenedorInput, { flex: 1, marginRight: 8 }]}>
              <Text style={styles.etiquetaInput}>Fecha Nacimiento</Text>
              <TextInput 
                style={[
                  styles.inputCompacto, 
                  inputEnfocado === 'fechaNacimiento' && styles.inputEnfocado
                ]} 
                placeholder="DD/MM/AAAA" 
                placeholderTextColor="#B0B0B0"
                value={datosFormulario.fechaNacimiento}
                onChangeText={(texto) => manejarCambioInput('fechaNacimiento', texto)}
                onFocus={() => setInputEnfocado('fechaNacimiento')}
                onBlur={() => setInputEnfocado(null)}
              />
            </View>
            
            <View style={[styles.contenedorInput, { flex: 1 }]}>
              <Text style={styles.etiquetaInput}>Teléfono</Text>
              <TextInput 
                style={[
                  styles.inputCompacto, 
                  inputEnfocado === 'telefono' && styles.inputEnfocado
                ]} 
                placeholder="Número" 
                placeholderTextColor="#B0B0B0"
                value={datosFormulario.telefono}
                onChangeText={(texto) => manejarCambioInput('telefono', texto)}
                onFocus={() => setInputEnfocado('telefono')}
                onBlur={() => setInputEnfocado(null)}
                keyboardType="phone-pad"
              />
            </View>
          </View>
          
          {/* Campos individuales */}
          <View style={styles.contenedorInput}>
            <Text style={styles.etiquetaInput}>Correo electrónico</Text>
            <TextInput 
              style={[
                styles.inputCompacto, 
                inputEnfocado === 'correo' && styles.inputEnfocado
              ]} 
              placeholder="tucorreo@ejemplo.com" 
              placeholderTextColor="#B0B0B0"
              value={datosFormulario.correo}
              onChangeText={(texto) => manejarCambioInput('correo', texto)}
              onFocus={() => setInputEnfocado('correo')}
              onBlur={() => setInputEnfocado(null)}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>
          
          <View style={styles.contenedorInput}>
            <Text style={styles.etiquetaInput}>Nombre de usuario</Text>
            <TextInput 
              style={[
                styles.inputCompacto, 
                inputEnfocado === 'nombreUsuario' && styles.inputEnfocado
              ]} 
              placeholder="Usuario" 
              placeholderTextColor="#B0B0B0"
              value={datosFormulario.nombreUsuario}
              onChangeText={(texto) => manejarCambioInput('nombreUsuario', texto)}
              onFocus={() => setInputEnfocado('nombreUsuario')}
              onBlur={() => setInputEnfocado(null)}
              autoCapitalize="none"
            />
          </View>
          
          {/* Contraseñas */}
          <View style={styles.filaInputs}>
            <View style={[styles.contenedorInput, { flex: 1, marginRight: 8 }]}>
              <Text style={styles.etiquetaInput}>Contraseña</Text>
              <TextInput 
                style={[
                  styles.inputCompacto, 
                  inputEnfocado === 'contrasena' && styles.inputEnfocado
                ]} 
                placeholder="••••••••" 
                secureTextEntry 
                placeholderTextColor="#B0B0B0"
                value={datosFormulario.contrasena}
                onChangeText={(texto) => manejarCambioInput('contrasena', texto)}
                onFocus={() => setInputEnfocado('contrasena')}
                onBlur={() => setInputEnfocado(null)}
              />
            </View>
            
            <View style={[styles.contenedorInput, { flex: 1 }]}>
              <Text style={styles.etiquetaInput}>Confirmar</Text>
              <TextInput 
                style={[
                  styles.inputCompacto, 
                  inputEnfocado === 'confirmarContrasena' && styles.inputEnfocado
                ]} 
                placeholder="••••••••" 
                secureTextEntry 
                placeholderTextColor="#B0B0B0"
                value={datosFormulario.confirmarContrasena}
                onChangeText={(texto) => manejarCambioInput('confirmarContrasena', texto)}
                onFocus={() => setInputEnfocado('confirmarContrasena')}
                onBlur={() => setInputEnfocado(null)}
              />
            </View>
          </View>

          <TouchableOpacity 
            style={styles.boton} 
            onPress={() => navigation.navigate('Dashboard')}
            activeOpacity={0.8}
          >
            <Text style={styles.textoBoton}>Registrarse</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.piePagina}>
          <Text style={styles.textoPiePagina}>¿Ya tienes una cuenta?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.enlacePiePagina}>Inicia sesión</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  contenedorPrincipal: {
    flex: 1,
  },
  contenedor: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#d5e2d4',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  formulario: { 
    backgroundColor: '#D9D9D9', 
    padding: 20, 
    borderRadius: 16, 
    width: '100%', 
    maxWidth: 400,
    alignItems: 'center', 
    shadowColor: '#2c3e50',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 16,
    elevation: 8,
  },
  icono: { 
    width: 60, 
    height: 60, 
    marginBottom: 12,
    tintColor: '#345830',
  },
  titulo: { 
    fontSize: 24, 
    fontWeight: '700', 
    color: '#2c3e50', 
    marginBottom: 4,
    fontFamily: 'sans-serif-medium',
  },
  subtitulo: {
    fontSize: 13,
    color: '#7f8c8d',
    marginBottom: 16,
    fontFamily: 'sans-serif',
    textAlign: 'center',
  },
  filaInputs: {
    flexDirection: 'row',
    width: '100%',
    marginBottom: 12,
  },
  contenedorInput: {
    width: '100%',
    marginBottom: 12,
  },
  etiquetaInput: {
    color: '#2c3e50',
    marginBottom: 4,
    fontSize: 13,
    fontWeight: '500',
  },
  inputCompacto: { 
    width: '100%', 
    height: 42, 
    borderColor: '#dfe6e9', 
    borderWidth: 1, 
    backgroundColor: '#f5f6fa', 
    color: '#2c3e50', 
    paddingHorizontal: 12, 
    borderRadius: 8,
    fontSize: 14,
  },
  inputEnfocado: {
    borderColor: '#345830',
    backgroundColor: '#ffffff',
    shadowColor: '#345830',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  boton: { 
    backgroundColor: '#345830', 
    padding: 12, 
    borderRadius: 8, 
    width: '100%', 
    alignItems: 'center', 
    marginTop: 8,
    shadowColor: '#345830',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 4,
  },
  textoBoton: { 
    color: '#ffffff', 
    fontWeight: '600',
    fontSize: 15,
  },
  piePagina: {
    flexDirection: 'row',
    marginTop: 16,
    alignItems: 'center',
  },
  textoPiePagina: {
    color: '#7f8c8d',
    marginRight: 4,
    fontSize: 13,
  },
  enlacePiePagina: {
    color: '#345830',
    fontWeight: '600',
    textDecorationLine: 'underline',
    fontSize: 13,
  },
});

export default RegisterScreen;