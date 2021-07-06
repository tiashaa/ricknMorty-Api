
import { gql, useQuery } from '@apollo/client';
import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native'


const getEpisodes = gql`

{ 
  results{
    id,
    name,
    air_date,
    episode
  }
}
`;

function Episodes() {
  const { loading, error, data } = useQuery(getEpisodes, { variables: {} });
  if (data) console.log('data is', data);
  if (loading) return <p>Loading ...</p>;
  if (error) return <p>Error: {error.message}</p>;
  console.log(data);

  return (
    <View style= {styles.viewStyle}>
    <ImageBackground source={"./../image/rm.jpg"} style={styles.backgroundimageStyle}>
      {data.episodes.results.map((episode) => (
        <View key={episode.id}>
          <h3>{episode.id}</h3>
          <p>
            {episode.name}-{episode.air-date} 
          </p>
         
        </View>
      ))}
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

export default Episodes;
