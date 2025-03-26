import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from './screens/RegisterScreen';
import DashboardScreen from './screens/DashboardScreen';
import NotificationHistoryScreen from './screens/NotificationHistoryScreen';
import UserScreen from './screens/UserScreen';
import AboutScreen from './screens/AboutScreen';
import CalendarScreen from './screens/CalendarScreen';
import NotificationDetailScreen from './screens/NotificationDetailScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" translucent={true}  />
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{ headerShown: false }} // Desactiva el encabezado
        />
        <Stack.Screen 
          name="Register" 
          component={RegisterScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Dashboard" 
          component={DashboardScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Calendar" 
          component={CalendarScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="History" 
          component={NotificationHistoryScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="NotificationDetail" 
          component={NotificationDetailScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="About" 
          component={AboutScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Usuario" 
          component={UserScreen} 
          options={{ headerShown: false }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
