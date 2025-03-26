import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, StatusBar, SafeAreaView } from 'react-native';

const NotificationDetailScreen = ({ route, navigation }) => {
  const { text, date } = route.params;

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
          <Text style={styles.headerTitle}>Detalle de Notificación</Text>
        </View>

        {/* Contenido principal */}
        <View style={styles.mainContent}>
          <View style={styles.notificationCard}>
            <Image 
              source={require('../assets/vis2.jpg')} 
              style={styles.notificationImage} 
            />
            
            <View style={styles.notificationContent}>
              <View style={styles.notificationHeader}>
                <Image 
                  source={require('../assets/icon_bell.png')} 
                  style={styles.notificationIcon} 
                />
                <Text style={styles.notificationTitle}>Alerta de Seguridad</Text>
              </View>
              
              <Text style={styles.notificationText}>{text}</Text>
              
              <View style={styles.notificationFooter}>
                <Image 
                  source={require('../assets/icon_clock.png')} 
                  style={styles.timeIcon} 
                />
                <Text style={styles.notificationDate}>{date}</Text>
              </View>
            </View>
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
  },
  headerTitle: {
    fontSize: 20,
    color: '#F5F5DC',
    fontWeight: '600',
  },
  mainContent: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  notificationCard: {
    backgroundColor: '#D9D9D9',
    borderRadius: 15,
    overflow: 'hidden',
    shadowColor: '#2c3e50',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  notificationImage: {
    width: '100%',
    height: 500,
    resizeMode: 'cover',
  },
  notificationContent: {
    padding: 20,
  },
  notificationHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  notificationIcon: {
    width: 24,
    height: 24,
    tintColor: '#2c3e50',
    marginRight: 10,
  },
  notificationTitle: {
    fontSize: 18,
    color: '#2c3e50',
    fontWeight: 'bold',
  },
  notificationText: {
    fontSize: 16,
    color: '#2c3e50',
    lineHeight: 24,
    marginBottom: 20,
  },
  notificationFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#dfe6e9',
    paddingTop: 15,
  },
  timeIcon: {
    width: 18,
    height: 18,
    marginRight: 8,
  },
  notificationDate: {
    fontSize: 14,
    color: '#7f8c8d',
  }
});

export default NotificationDetailScreen;