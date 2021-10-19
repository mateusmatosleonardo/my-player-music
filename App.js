import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Audio } from 'expo-av';
import {Montserrat_400Regular, Montserrat_600SemiBold, useFonts} from '@expo-google-fonts/montserrat';
import { AppLoading } from 'expo'

export default function App() {

  const fonts = useFonts({
    Montserrat_400Regular, 
    Montserrat_600SemiBold
  })

  if(!fonts){
    return <AppLoading/>
  }

  const [audio, setAudio] = useState(null); // controlar o player de áudio por esse estado

  const [musics, setMusics] = useState([
    {
      id: 1,
      name: 'Bring me to life',
      artista: 'Evanesce',
      playing: false,
      file: ""
    },
    {
      id: 2,
      name: 'Back to december',
      artista: 'Taylor swift',
      playing: false,
      file: ""
    },
    {
      id: 3,
      name: 'This love',
      artista: 'Marron 5',
      playing: false,
      file: ""
    },
    
  ])

  return (
    <ScrollView style={styles.container}>
      <StatusBar hidden/>
      <View style={styles.header}>
        <Text style={styles.title}>Minhas músicas | App music</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
    color: "#fff"
  },
  header:{
    backgroundColor: "#1DB954",
    width: "100%",
    padding: 20
  },
  title:{
    fontFamily: "Montserrat_600SemiBold",
    fontSize: 20,
    textAlign: "center"
  }
});
