import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/native-stack';

export default function AppFilmes({ navigation }) {
  const filmes = [
    'https://http2.mlstatic.com/D_NQ_NP_839183-MLB49338929710_032022-O.jpg',
    'https://cinepop.com.br/wp-content/uploads/2019/03/vingadores-ultimato-2.jpg',
    'https://br.web.img3.acsta.net/pictures/21/04/14/19/06/3385237.jpg',
  ];

  return (
    <View style={styles.container}>
      <MovieGrid filmes={filmes} />
     
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
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  movie: {
    width: 125,
    height: 200,
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


