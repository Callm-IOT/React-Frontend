import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AboutScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Acerca de Nosotros</Text>
      <Text style={styles.text}>
        El Timbre Digital Inteligente es un dispositivo IoT diseñado para brindar mayor seguridad
        a los hogares mediante llamadas bidireccionales al celular del dueño de la casa. Este
        sistema permite comunicación en tiempo real con la persona que toca el timbre y ofrece
        funcionalidades avanzadas para mejorar la seguridad del hogar.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#345830', padding: 20 },
  title: { fontSize: 24, color: '#F3F3F3', fontWeight: 'bold', marginBottom: 10 },
  text: { fontSize: 16, color: '#F3F3F3', marginVertical: 5 },
});

export default AboutScreen;
