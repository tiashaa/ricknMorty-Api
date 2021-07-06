import React from 'react'
import { gql, useQuery } from '@apollo/client';
import { View, StyleSheet, ImageBackground } from 'react-native';

const getLocation = gql`
  {
    locations{
    
        results{
          id,
          name,
          type,
          dimension,
            
          }
        }
  }
`;

function Location({ Component, pageProps }) {
  const { loading, error, data } = useQuery(getLocation, { variables: {} });
  if (data) console.log('data is', data);
  if (loading) return <p>Loading ...</p>;
  if (error) return <p>Error: {error.message}</p>;
  console.log(data);

  return (
    <View style={styles.viewStyle}>
        <ImageBackground source={"./../image/rm.jpg"} style={styles.backgroundimageStyle}>
      {data.locations.results.map((location) => (
        <View key={location.id}>
          <h3>{location.id}</h3>
          <p>
            {location.name} - {location.type}
          </p>
          <h3>{location.dimension}</h3>
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

export default Location
