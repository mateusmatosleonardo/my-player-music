import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Audio } from 'expo-av';
import {Montserrat_400Regular, Montserrat_600SemiBold, useFonts} from '@expo-google-fonts/montserrat';
import { AppLoading } from 'expo';
import { AntDesign } from '@expo/vector-icons'
import Player from './src/components/Player';
import { Fontisto } from '@expo/vector-icons'; 

/*
  MELHORIAS: QUANDO O PLAYER ESTIVER TOCANDO, O TEM QUE TER UM BOTÃO DE PAUSA!
*/

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
      file: require('./sample1.mp3')
    },
    {
      id: 2,
      name: 'Back to december',
      artista: 'Taylor swift',
      playing: false,
      file: require('./sample1.mp3')
    },
    {
      id: 3,
      name: 'This love',
      artista: 'Marron 5',
      playing: false,
      file: require('./sample1.mp3')
    },
    {
      id: 4,
      name: 'This love',
      artista: 'Marron 5',
      playing: false,
      file: require('./sample1.mp3')
    },
    {
      id: 5,
      name: 'This love',
      artista: 'Marron 5',
      playing: false,
      file: require('./sample1.mp3')
    },
    {
      id: 6,
      name: 'This love',
      artista: 'Marron 5',
      playing: false,
      file: require('./sample1.mp3')
    },
    {
      id: 7,
      name: 'This love',
      artista: 'Marron 5',
      playing: false,
      file: require('./sample1.mp3')
    },
    {
      id: 8,
      name: 'This love',
      artista: 'Marron 5',
      playing: false,
      file: require('./sample1.mp3')
    },
    {
      id: 9,
      name: 'This love',
      artista: 'Marron 5',
      playing: false,
      file: require('./sample1.mp3')
    },
    {
      id: 10,
      name: 'This love',
      artista: 'Marron 5',
      playing: false,
      file: require('./sample1.mp3')
    },
    {
      id: 11,
      name: 'This love',
      artista: 'Marron 5',
      playing: false,
      file: require('./sample1.mp3')
    },
    {
      id: 12,
      name: 'This love',
      artista: 'Marron 5',
      playing: false,
      file: require('./sample1.mp3')
    },
    {
      id: 13,
      name: 'This love',
      artista: 'Marron 5',
      playing: false,
      file: require('./sample1.mp3')
    },
    {
      id: 14,
      name: 'This love',
      artista: 'Marron 5',
      playing: false,
      file: require('./sample1.mp3')
    },
  ])

  const changeMusic = async (id) =>{
    let curFile = null;
    let newMusic = musics.filter((val, k)=>{
      if(id == k){
        musics[k].playing = true
        curFile = musics[k].file
      }else{
        musics[k].playing = false
      }

      return musics[k]
    })

    if(audio != null){
      audio.unloadAsync()
    }

    let curAudio = new Audio.Sound();
    
    try{
      await curAudio.loadAsync(curFile)
      await curAudio.playAsync()
    }catch(error){}

    setAudio(curAudio)
    setMusics(newMusic)
  }

  return (
    <View style={{flex: 1}}>
      <ScrollView style={styles.container}>
        <StatusBar hidden/>
        <View style={styles.header}>
          <Text style={styles.title}>My App Music</Text><Fontisto name="applemusic" size={24} color="black" style={{paddingLeft: 40, marginTop: 5}} />
        </View>

        <View style={styles.table}>
          <Text style={{width: "50%", color: "rgb(200, 200, 200)", fontFamily: "Montserrat_400Regular", fontSize: 16}}>
            Músicas
          </Text>
          <Text style={{width: "50%", color: "rgb(200, 200, 200)", fontFamily: "Montserrat_400Regular", fontSize: 16}}>
            Artista
          </Text>
        </View>

        {
          musics.map((val, i)=>{
            if(val.playing){
              return(
                <View style={styles.table}>
                <TouchableOpacity onPress={() => changeMusic(i)} style={{width: "100%", flexDirection:"row"}}>
                  <Text style={{width: "50%", color: "#1DB954", fontFamily: "Montserrat_400Regular"}}><AntDesign name='play' size={15} color='#1DB954' id={val.id}/>   {val.name}</Text>
                  <Text style={{width: "50%", color: "#1DB954", fontFamily: "Montserrat_400Regular"}}>{val.artista}</Text>
                </TouchableOpacity>
              </View>
              )
            }else{
              return(
                <View style={styles.table}>
                <TouchableOpacity onPress={() => changeMusic(i)} style={{width: "100%", flexDirection:"row"}}>
                  <Text style={{width: "50%", color: "#fff", fontFamily: "Montserrat_400Regular"}}><AntDesign name='play' size={15} color='#fff' id={val.id}/>   {val.name}</Text>
                  <Text style={{width: "50%", color: "#fff", fontFamily: "Montserrat_400Regular"}}>{val.artista}</Text>
                </TouchableOpacity>
              </View>
              )
            }
          })
        }
      <View style={{paddingBottom: 100}}></View>
      </ScrollView>
      <Player/>
    </View>  
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
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title:{
    fontFamily: "Montserrat_600SemiBold",
    fontSize: 20,
    textAlign: "center",
    margin: 'auto'
  },
  table:{
    flexDirection: "row",
    padding: 20,
    borderBottomColor: "#fff",
    borderBottomWidth: 1
  }
});
