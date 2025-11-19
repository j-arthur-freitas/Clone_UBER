// app/index.tsx (CORRETO)
import 'react-native-reanimated';
import React from 'react';
// import { NavigationContainer } from '@react-navigation/native'; // ⬅️ REMOVIDO!
import { AppNavigator } from '../src/navigation/AppNavigator';

export default function AppRouterEntry() {
  return (
    
    <AppNavigator />
  );
}