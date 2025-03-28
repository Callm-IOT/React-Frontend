import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, StatusBar, SafeAreaView } from 'react-native';

const CalendarScreen = ({ navigation }) => {
  // Simulando datos de eventos
  const daysInMonth = 30;
  const activeDays = [2, 5, 8, 12, 15, 19, 22, 25, 28]; // Días con actividad

  const renderDays = () => {
    const days = [];
    for (let i = 1; i <= daysInMonth; i++) {
      const isActive = activeDays.includes(i);
      days.push(
        <View
          key={i}
          style={[
            styles.dayContainer,
            isActive ? styles.activeDay : styles.inactiveDay,
          ]}
        >
          <Text style={styles.dayText}>{i}</Text>
        </View>
      );
    }
    return days;
  };

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
          <Text style={styles.headerTitle}>Calendario de Actividad</Text>
        </View>

        {/* Contenido principal */}
        <View style={styles.mainContent}>
          <View style={styles.calendarBox}>
            <View style={styles.daysWrapper}>{renderDays()}</View>
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
    marginRight: 20,
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
    justifyContent: 'center',
  },
  calendarBox: {
    width: '100%',
    backgroundColor: '#D9D9D9',
    borderRadius: 15,
    padding: 20,
    shadowColor: '#2c3e50',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  daysWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  dayContainer: {
    width: 40,
    height: 40,
    margin: 5,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeDay: {
    backgroundColor: '#345830', // Verde oscuro para días con actividad
  },
  inactiveDay: {
    backgroundColor: '#f5f6fa', // Gris claro para días sin actividad
  },
  dayText: {
    color: '#2c3e50',
    fontWeight: 'bold',
  },
});

export default CalendarScreen;