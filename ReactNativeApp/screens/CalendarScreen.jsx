import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CalendarScreen = () => {
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
    <View style={styles.container}>
      <Text style={styles.title}>Calendario de Actividad</Text>

      <View style={styles.calendarBox}>
        <View style={styles.daysWrapper}>{renderDays()}</View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#1A1F16' },

  title: { fontSize: 28, color: '#F3F3F3', marginBottom: 20 },

  calendarBox: {
    width: '90%',
    backgroundColor: '#2C3E50',
    borderRadius: 15,
    padding: 20,
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
    backgroundColor: '#6FCF97', // Verde para días con actividad
  },

  inactiveDay: {
    backgroundColor: '#BDC3C7', // Gris para días sin actividad
  },

  dayText: {
    color: '#1A1F16',
    fontWeight: 'bold',
  },
});

export default CalendarScreen;
