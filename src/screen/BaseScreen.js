import React from 'react'
import { View, Text, ImageBackground, StyleSheet } from 'react-native'

function Base(props) {
    return (
        <View style={styles.viewStyle}>
        <ImageBackground source={"./../image/rm.jpg"} style={styles.backgroundimageStyle}>
           <Text style={styles.textStyle}>
           Rick & Morty
           </Text> 
           </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle: {
      fontSize: 30,
      color: "blue",
      alignItems: 'center',
      justifyContent: 'center',
      textAlign:'center'
    },
    viewStyle: {
      flex: 1,
      backgroundColor: "yellow"
    },
    backgroundimageStyle: {
      flex:1,
      resizeMode: "cover",
      justifyContent: "center"
  },
  
  });

export default Base
