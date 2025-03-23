import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from './screens/RegisterScreen';
import DashboardScreen from './screens/DashboardScreen';
import  NotificationHistoryScreen from './screens/NotificationHistoryScreen';
import UserScreen from './screens/UserScreen';
import AboutScreen from './screens/AboutScreen';
import CalendarScreen from './screens/CalendarScreen';
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
        <Stack.Screen name="Calendar" component={CalendarScreen} />
        <Stack.Screen name="History" component={NotificationHistoryScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name="Usuario" component={UserScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
