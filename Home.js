import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { StyleSheet, Text, View, TextInput, Button, Keyboard, FlatList, ScrollView, TouchableOpacity } from 'react-native';
//API KEY  =  36e8742

import Result from './Result'

export default function Home({ navigation }) {
  const [film, setFilm] = useState('')
  const [movies, setMovies] = useState([])
  const getFilm = async () => {
    let pages = 5
    let arr = []
   await fetch(`http://www.omdbapi.com/?apikey=36e8742&s=${film}`)
        .then(res => res.json())
        .then(data => pages = data.totalResults / 10)
    if (film.length) {
      for(let i = 1; i <= pages ;i++){
      await  fetch(`http://www.omdbapi.com/?apikey=36e8742&s=${film}&page=${i}`)
        .then(res => res.json())
        .then(data => arr.push(data.Search))
      }
      arr = arr.flat()
      setMovies(arr)
      
      setFilm('')
      Keyboard.dismiss()
    } else Keyboard.dismiss()
  }
  const moviesToDisplay = movies.map(m => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate('Details', {
        title: m.Title,
        year: m.Year,
        type: m.Type,
        poster: m.Poster,
      })} key={Math.random()}>
        <Result title={m.Title} uri={m.Poster} />
      </TouchableOpacity>
    )
  })
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row' }}>
        <TextInput value={film} onChangeText={(t) => setFilm(t)} style={{ borderBottomColor: 'black', borderBottomWidth: 1, width: '80%', }} />
        <Button title='Search' onPress={getFilm} value={film} />
      </View>
      <ScrollView>
        {moviesToDisplay}
      </ScrollView>
      {/* <FlatList
        data={movies}
        renderItem={( {item} ) => <TouchableOpacity onPress={() => navigation.navigate('Details', {
          title: item.Title,
          year: item.Year,
          type: item.Type,
          poster: item.Poster,
        })} key={Math.random()}>
          <Result title={item.Title} uri={item.Poster} />
        </TouchableOpacity>} 
      keyExtractor={item => item.imdbID}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 40,
    width:'100%'
  },
});
