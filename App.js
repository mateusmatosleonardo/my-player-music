import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Audio } from 'expo-av';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <StatusBar hidden/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
  },
});
