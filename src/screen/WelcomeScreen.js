import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements/dist/buttons/Button'
import { FontAwesome5 } from '@expo/vector-icons';

function Welcome(props) {
    return (
        <View style={styles.viewStyle}>
        <Text style={styles.textStyle} >
        Welcome
        </Text>
        <Button
        title="Click here"
        type="solid"
        icon={<FontAwesome5 name="user-edit" size={24} color="white" />}
        onPress= {
            function(){
                props.navigation.navigate('Rick & Morty');
            }}
            />
            </View>
    )
}



const styles = StyleSheet.create({
    textStyle: {
      fontSize: 20,
      color: "blue",
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center'
    },
    viewStyle: {
      flex: 1,
      backgroundColor: "orange"
    },
    imageStyle: {
      flex:1,
      resizeMode: "cover",
      justifyContent: "center"
  },
  });

export default Welcome
