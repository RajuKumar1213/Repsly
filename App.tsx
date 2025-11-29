/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { LandingPage } from './screens/LandingPage';
import './global.css';

function App() {
  return (
    <SafeAreaProvider>
      <LandingPage />
    </SafeAreaProvider>
  );
}

export default App;
