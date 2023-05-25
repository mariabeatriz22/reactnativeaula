import React from 'react';
import { StyleSheet, View, Image, Button, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/native-stack';
import Estilo from '../Estilo';
import { createNativeStackNavigator } from '@react-navigation/native-stack';




export default function AppFilmes({navigation}) {
  const filmes = [
    'https://m.media-amazon.com/images/I/61io1vJIWFL.jpg',
    'https://p2.trrsf.com/image/fget/cf/1200/1600/middle/images.terra.com/2023/05/04/ariel-a-pequena-sereia-jpg-1h7zt6guth750.jpg',
    'https://capas-p.imagemfilmes.com.br/164069_000_p.jpg',
  ];
 
  return (
    <View style={styles.container}>
      <MovieGrid filmes={filmes} />
      <Button title="Clique-me" onPress={() => navigation.navigate("AppFilmes2")} />
    </View>
  );
  }

const MovieGrid = ({ filmes }) => (
  <View style={styles.moviesContainer}>
    {filmes.map((url, index) => (
      <View key={index} style={styles.movie}>
        <Image source={{ uri: url }} style={styles.image} />
      </View>
    ))}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',


  },
  moviesContainer: {

    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  movie: {

    width: 125,
    height: 300,
    margin: 2,
  },
  image: {
    flexGrow: 100,
    backgroundColor: '#fff',
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});