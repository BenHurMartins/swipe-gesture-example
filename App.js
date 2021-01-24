import React from 'react';
import {StyleSheet, StatusBar, SafeAreaView} from 'react-native';

import Home from './src/Screens/Home';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex: 1}}>
        <Home />
      </SafeAreaView>
    </>
  );
};

export default App;
