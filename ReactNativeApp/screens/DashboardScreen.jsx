import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const DashboardScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>

      {/* Icono de Usuario en la parte superior izquierda con color de fondo */}
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => navigation.navigate('Usuario')}>
          <Text style={styles.userIcon}>👤</Text>
        </TouchableOpacity>
      </View>

      {/* Contenido principal */}
      <View style={styles.mainContent}>

        {/* Centrando el contador de visitantes */}
        <View style={styles.visitorsToday}>
          <Text style={styles.title}>Visitantes el día de hoy:</Text>
          <Text style={styles.counter}>12</Text>
        </View>

        <View style={styles.visitorInfo}>
          <Image source={require('../assets/diagrama.jpg')} style={styles.visitorImage} />
          <Text style={styles.percentage}>95% de actividad en tu puerta esta semana</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Cerrar Puerta</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Abrir Puerta</Text>
          </TouchableOpacity>
        </View>

        {/* Tabla de visitantes recientes */}
        <View style={styles.table}>
          <Text style={styles.tableTitle}>Visitantes Recientes:</Text>
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
            <Text style={styles.tableCell}>Presente</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>2</Text>
            <Image source={require('../assets/visitante.jpg')} style={styles.tableImage} />
            <Text style={styles.tableCell}>09/03/25</Text>
            <Text style={styles.tableCell}>04:22 p.m.</Text>
            <Text style={styles.tableCell}>Ausente</Text>
          </View>
        </View>
      </View>

      {/* Barra de Navegación Inferior */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Dashboard')}>
          <Text style={styles.navIcon}>🏠</Text>
          <Text style={styles.navLabel}>Inicio</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Calendar')}>
          <Text style={styles.navIcon}>📅</Text>
          <Text style={styles.navLabel}>Calendario</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('History')}>
          <Text style={styles.navIcon}>🔔</Text>
          <Text style={styles.navLabel}>Historial</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1F16',
  },

  topBar: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    justifyContent: 'flex-start',
    backgroundColor: '#345830', // Color verde similar al bottomNav
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
  },

  userIcon: {
    fontSize: 28,
    color: '#F3F3F3',
  },

  mainContent: {
    flex: 1,
    padding: 20,
  },

  visitorsToday: {
    alignItems: 'center', // Centra horizontalmente el contenido
    marginBottom: 20,
  },

  title: {
    fontSize: 22,
    color: '#F3F3F3',
    textAlign: 'center',
  },

  counter: {
    fontSize: 50,
    color: '#F3F3F3',
    textAlign: 'center',
    marginTop: 10,
  },

  percentage: {
    fontSize: 16,
    color: '#F3F3F3',
    marginVertical: 10,
    textAlign: 'center',
  },

  visitorInfo: {
    marginTop: 20,
    alignItems: 'center',
  },

  visitorImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },

  visitorText: {
    color: '#F3F3F3',
    marginVertical: 10,
  },

  button: {
    backgroundColor: '#1E3F20',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
    width: '60%',
    alignItems: 'center',
  },

  buttonText: {
    color: '#F3F3F3',
    fontWeight: 'bold',
  },

  table: {
    marginTop: 30,
    width: '100%',
    backgroundColor: '#F5F5DC', // Color hueso
    borderRadius: 10,
    padding: 10,
  },

  tableTitle: {
    color: '#1A1F16',
    fontSize: 18,
    marginBottom: 10,
    fontWeight: 'bold',
  },

  tableRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },

  tableHeader: {
    borderBottomWidth: 2,
    borderColor: '#999',
  },

  tableCellHeader: {
    flex: 1,
    color: '#1A1F16',
    fontWeight: 'bold',
    textAlign: 'center',
  },

  tableCell: {
    flex: 1,
    color: '#1A1F16',
    textAlign: 'center',
  },

  tableImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
    alignSelf: 'center',
  },

  bottomNav: {
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#345830',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },

  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  navIcon: {
    fontSize: 24,
    color: '#F3F3F3',
  },

  navLabel: {
    fontSize: 12,
    color: '#F3F3F3',
    marginTop: 4,
  },
});

export default DashboardScreen;
