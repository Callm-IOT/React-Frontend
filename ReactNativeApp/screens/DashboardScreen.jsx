import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, StatusBar, SafeAreaView } from 'react-native';

const DashboardScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar backgroundColor="#345830" barStyle="light-content" />
      <View style={styles.container}>
        {/* Barra superior con icono de usuario */}
        <View style={styles.topBar}>
          <TouchableOpacity onPress={() => navigation.navigate('Usuario')}>
            <Image 
              source={require('../assets/iconuser.png')} 
              style={styles.userIcon} 
            />
          </TouchableOpacity>
        </View>

        {/* Contenido principal */}
        <View style={styles.mainContent}>
          {/* Contador de visitantes */}
          <View style={styles.visitorsToday}>
            <Text style={styles.title}>Visitantes el día de hoy:</Text>
            <Text style={styles.counter}>12</Text>
          </View>

          <View style={styles.visitorInfo}>
            <Image source={require('../assets/diagrama.jpg')} style={styles.visitorImage} />
            <Text style={styles.percentage}>95% de actividad en tu puerta esta semana</Text>
            
            <View style={styles.buttonRow}>
              <TouchableOpacity style={[styles.button, styles.closeButton]}>
                <Text style={styles.buttonText}>Cerrar Puerta</Text>
              </TouchableOpacity>
              
              <TouchableOpacity style={[styles.button, styles.openButton]}>
                <Text style={styles.buttonText}>Abrir Puerta</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Tabla de visitantes recientes */}
          <View style={styles.tableContainer}>
            <Text style={styles.tableTitle}>Visitantes Recientes:</Text>
            <View style={styles.table}>
              <View style={[styles.tableRow, styles.tableHeader]}>
                <Text style={styles.tableCellHeader}>ID</Text>
                <Text style={styles.tableCellHeader}>Foto</Text>
                <Text style={styles.tableCellHeader}>Fecha</Text>
                <Text style={styles.tableCellHeader}>Hora</Text>
                <Text style={styles.tableCellHeader}>Estado</Text>
              </View>
              
              <View style={styles.tableRow}>
                <Text style={styles.tableCell}>1</Text>
                <Image source={require('../assets/vis2.jpg')} style={styles.tableImage} />
                <Text style={styles.tableCell}>09/03/25</Text>
                <Text style={styles.tableCell}>02:18 a.m.</Text>
                <Text style={[styles.tableCell, styles.statusPresent]}>Presente</Text>
              </View>
              
              <View style={styles.tableRow}>
                <Text style={styles.tableCell}>2</Text>
                <Image source={require('../assets/visitante.jpg')} style={styles.tableImage} />
                <Text style={styles.tableCell}>09/03/25</Text>
                <Text style={styles.tableCell}>04:22 p.m.</Text>
                <Text style={[styles.tableCell, styles.statusAbsent]}>Ausente</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Barra de Navegación Inferior */}
        <View style={styles.bottomNav}>
          <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Dashboard')}>
            <Image source={require('../assets/icon_home.png')} style={styles.navIcon} />
            <Text style={styles.navLabel}>Inicio</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Calendar')}>
            <Image source={require('../assets/icon_calendar.png')} style={styles.navIcon} />
            <Text style={styles.navLabel}>Calendario</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('History')}>
            <Image source={require('../assets/icon_bell.png')} style={styles.navIcon} />
            <Text style={styles.navLabel}>Notificaciones</Text>
          </TouchableOpacity>
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
    height: 78,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    justifyContent: 'flex-start',
    backgroundColor: '#345830',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  userIcon: {
    width: 36,
    height: 36,
    tintColor: '#ffffff',
    
  },
  mainContent: {
    flex: 1,
    padding: 20,
    paddingBottom: 0,
  },
  visitorsToday: {
    backgroundColor: '#D9D9D9',
    borderRadius: 15,
    padding: 20,
    alignItems: 'center',
    marginBottom: 15,
    shadowColor: '#2c3e50',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  title: {
    fontSize: 20,
    color: '#2c3e50',
    textAlign: 'center',
    fontWeight: '700',
  },
  counter: {
    fontSize: 42,
    color: '#345830',
    textAlign: 'center',
    marginTop: 5,
    fontWeight: 'bold',
  },
  percentage: {
    fontSize: 14,
    color: '#7f8c8d',
    marginVertical: 8,
    textAlign: 'center',
  },
  visitorInfo: {
    backgroundColor: '#D9D9D9',
    borderRadius: 15,
    padding: 20,
    marginTop: 15,
    alignItems: 'center',
    shadowColor: '#2c3e50',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  visitorImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 15,
  },
  button: {
    padding: 12,
    borderRadius: 10,
    width: '48%',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#2c3e50',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  closeButton: {
    backgroundColor: '#D9D9D9',
    borderWidth: 2,
    borderColor: '#8B0000',
  },
  openButton: {
    backgroundColor: '#345830',
  },
  buttonText: {
    fontWeight: '600',
    fontSize: 14,
  },
  tableContainer: {
    backgroundColor: '#D9D9D9',
    borderRadius: 15,
    padding: 15,
    marginTop: 20,
    marginBottom: 10,
    shadowColor: '#2c3e50',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  tableTitle: {
    color: '#2c3e50',
    fontSize: 16,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  table: {
    width: '100%',
    backgroundColor: '#f5f6fa',
    borderRadius: 10,
    padding: 10,
  },
  tableRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderColor: '#dfe6e9',
  },
  tableHeader: {
    borderBottomWidth: 2,
    borderColor: '#345830',
  },
  tableCellHeader: {
    flex: 1,
    color: '#2c3e50',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 12,
  },
  tableCell: {
    flex: 1,
    color: '#2c3e50',
    textAlign: 'center',
    fontSize: 12,
  },
  tableImage: {
    width: 28,
    height: 28,
    borderRadius: 14,
    alignSelf: 'center',
  },
  statusPresent: {
    color: '#345830',
    fontWeight: 'bold',
  },
  statusAbsent: {
    color: '#8B0000',
    fontWeight: 'bold',
  },
  bottomNav: {
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#345830',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    paddingBottom: 10,
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
  },
  navIcon: {
    width: 24,
    height: 24,
    marginBottom: 4,
  },
  navLabel: {
    fontSize: 12,
    color: '#B8B2A7',
    fontWeight: '500',
  },
});

export default DashboardScreen;