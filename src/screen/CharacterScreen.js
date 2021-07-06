import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { ScrollView } from 'react-native-gesture-handler';
import { View, Text, ImageBackground, StyleSheet } from 'react-native'

const getCharacter = gql`
  {
    characters {
      results {
        id
        name
        gender
        status
        image
      }
    }
  }
`;

function Character({ Component, pageProps }) {
  const { loading, error, data } = useQuery(getCharacter, { variables: {} });
  if (data) console.log('data is', data);
  if (loading) return <p>Loading ...</p>;
  if (error) return <p>Error: {error.message}</p>;
  console.log(data);

  return (
    <View style= {styles.viewStyle}>
    <ImageBackground source={"./../image/rm.jpg"} style={styles.backgroundimageStyle}>
    <ScrollView>
      {data.characters.results.map((character) => (
        <View key={character.id}>
        
          <h3>{character.id}</h3>
          <p>
            {character.name} - {character.gender} - {character.image}
          </p>
          <h3>{character.status}</h3>
          
        </View>
      ))}
      </ScrollView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    color: "blue",
    alignItems: 'center',
    justifyContent: 'center',
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

export default Character;
