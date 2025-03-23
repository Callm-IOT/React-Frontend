import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const NotificationHistoryScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Historial de Notificaciones</Text>

      <ScrollView style={styles.notificationContainer}>
        <View style={styles.notification}>
          <Text style={styles.text}>- Alguien tocó el timbre (09/03/25 - 02:18 a.m.)</Text>
        </View>
        <View style={styles.notification}>
          <Text style={styles.text}>- Nueva actualización disponible (09/03/25 - 02:20 a.m.)</Text>
        </View>
        <View style={styles.notification}>
          <Text style={styles.text}>- Puerta cerrada correctamente (09/03/25 - 02:25 a.m.)</Text>
        </View>
        <View style={styles.notification}>
          <Text style={styles.text}>- Alguien intentó abrir la puerta (09/03/25 - 02:30 a.m.)</Text>
        </View>
        <View style={styles.notification}>
          <Text style={styles.text}>- Llamada de emergencia registrada (09/03/25 - 02:35 a.m.)</Text>
        </View>
        <View style={styles.notification}>
          <Text style={styles.text}>- Sistema de seguridad activado (09/03/25 - 02:40 a.m.)</Text>
        </View>
        <View style={styles.notification}>
          <Text style={styles.text}>- Alguien tocó el timbre (09/03/25 - 03:00 a.m.)</Text>
        </View>
        <View style={styles.notification}>
          <Text style={styles.text}>- Puerta abierta manualmente (09/03/25 - 03:10 a.m.)</Text>
        </View>
        <View style={styles.notification}>
          <Text style={styles.text}>- Nueva notificación de seguridad (09/03/25 - 03:15 a.m.)</Text>
        </View>
        <View style={styles.notification}>
          <Text style={styles.text}>- Actualización de firmware completada (09/03/25 - 03:20 a.m.)</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#1A1F16', padding: 20 },
  title: { fontSize: 24, color: '#F3F3F3', fontWeight: 'bold', marginBottom: 10 },
  notificationContainer: { marginTop: 10 },
  notification: {
    backgroundColor: '#2C3E50',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
  },
  text: { fontSize: 16, color: '#F3F3F3' },
});

export default NotificationHistoryScreen;
