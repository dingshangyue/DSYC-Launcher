import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Provider as PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import RootLayout from './app/_layout';

export default function App() {
  return (
    <SafeAreaProvider>
      <PaperProvider>
        <RootLayout />
        <StatusBar style="auto" />
      </PaperProvider>
    </SafeAreaProvider>
  );
}
