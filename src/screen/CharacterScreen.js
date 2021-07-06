import React, { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { gql, useQuery } from '@apollo/client';
import client from './../api/apollo-client';

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
    <div>
      {data.characters.results.map((character) => (
        <div key={character.id}>
          <h3>{character.id}</h3>
          <p>
            {character.name} - {character.gender} - {character.image}
          </p>
          <h3>{character.status}</h3>
        </div>
      ))}
    </div>
  );
}

export default Character;
