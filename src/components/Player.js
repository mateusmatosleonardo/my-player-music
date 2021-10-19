import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons'
import { Sound } from "expo-av/build/Audio";

export default function Player(props){

    const handlePlay = async () =>{
        let curFile = props.musics[props.audioIndex].file

        let newMusic = props.musics.filter((val, k)=>{
            if(props.audioIndex == k){
            props.musics[k].playing = true
            curFile = props.musics[k].file
            }else{
            props.musics[k].playing = false
            }
            return props.musics[k]
        })

        try{
            if(props.audio != null){
                props.setPlaying(true)
                props.setMusics(newMusic)
                await props.audio.playAsync()
            }else{
                let curAudio = new Audio.Sound()
                try{
                    await curAudio.loadAsync(curFile)
                    await curFile.playAsync()
                }catch(error){}
                props.setAudio(curAudio)
                props.setMusics(newMusic)
                props.setPlaying(true)
            }
        }catch(error){}
    }

    const handlePause = async () =>{
        if(props.audio != null){
            props.audio.pauseAsync()
        }
        props.setPlaying(false)
    }


    return(
        <View style={styles.player}>
            <TouchableOpacity style={{marginRight: 20, marginLeft: 20}}>
                <AntDesign name='banckward' size={35} color='#fff'/>
            </TouchableOpacity>
            {
                (!props.playing) ? 
            <TouchableOpacity onPress={() => handlePlay()} style={{marginRight: 20, marginLeft: 20}}>
                <AntDesign name='playcircleo' size={35} color='#fff'/>
            </TouchableOpacity>
                :
            <TouchableOpacity onPress={()=> handlePause()} style={{marginRight: 20, marginLeft: 20}}>
                <AntDesign name='pausecircleo' size={35} color='#fff'/>
            </TouchableOpacity>
            }
            <TouchableOpacity style={{marginRight: 20, marginLeft: 20}}>
                <AntDesign name='forward' size={35} color='#fff'/>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    player:{
        width: "100%",
        height: 100,
        position: 'absolute',
        bottom: 0,
        left: 0,
        zIndex: 999,
        backgroundColor: "#111",
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    }
})