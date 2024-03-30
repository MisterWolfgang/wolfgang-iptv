/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
} from 'react-native';
import { Input } from '@wolfgang/ui';
import Providers from './app/utils/Providers';

export const App = () => {
  return (
    <Providers>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView
        style={styles.container}
      >
        <Input />
        <Input />
        <Input />
        <Input />
        <Input />
      </SafeAreaView>
    </Providers>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#4d3535',
    height: '100%',
    padding: 20,
    gap: 20
  },
});

export default App;
