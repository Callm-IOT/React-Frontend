import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, StatusBar, SafeAreaView, Image } from 'react-native';

const NotificationHistoryScreen = ({ navigation }) => {
  const handleNotificationPress = (text, date) => {
    navigation.navigate('NotificationDetail', { text, date });
  };

  const notifications = [
    { id: 1, text: 'Alguien tocó el timbre', date: '09/03/25 - 02:18 a.m.' },
    { id: 2, text: 'Alguien tocó el timbre', date: '09/03/25 - 02:20 a.m.' },
    { id: 3, text: 'Puerta cerrada correctamente', date: '09/03/25 - 02:25 a.m.' },
    { id: 4, text: 'Alguien intentó abrir la puerta', date: '09/03/25 - 02:30 a.m.' },
    { id: 5, text: 'Llamada de emergencia registrada', date: '09/03/25 - 02:35 a.m.' },
    { id: 6, text: 'Sistema de seguridad activado', date: '09/03/25 - 02:40 a.m.' },
    { id: 7, text: 'Alguien tocó el timbre', date: '09/03/25 - 03:00 a.m.' },
    { id: 8, text: 'Puerta abierta manualmente', date: '09/03/25 - 03:10 a.m.' },
    { id: 9, text: 'Nueva notificación de seguridad', date: '09/03/25 - 03:15 a.m.' },
    { id: 10, text: 'Actualización de firmware completada', date: '09/03/25 - 03:20 a.m.' }
  ];

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
          <Text style={styles.headerTitle}>Historial de Notificaciones</Text>
        </View>

        {/* Contenido principal */}
        <View style={styles.mainContent}>
          <ScrollView style={styles.notificationContainer}>
            {notifications.map((notification) => (
              <TouchableOpacity 
                key={notification.id}
                style={styles.notification}
                onPress={() => handleNotificationPress(notification.text, notification.date)}
              >
                <View style={styles.notificationContent}>
                  <Text style={styles.notificationText}>• {notification.text}</Text>
                  <Text style={styles.notificationDate}>{notification.date}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
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
  notificationContainer: {
    flex: 1,
  },
  notification: {
    backgroundColor: '#D9D9D9',
    borderRadius: 10,
    padding: 15,
    marginBottom: 12,
    shadowColor: '#2c3e50',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  notificationContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  notificationText: {
    fontSize: 15,
    color: '#2c3e50',
    fontWeight: '500',
    flex: 1,
  },
  notificationDate: {
    fontSize: 13,
    color: '#7f8c8d',
    marginLeft: 10,
  },
});

export default NotificationHistoryScreen;