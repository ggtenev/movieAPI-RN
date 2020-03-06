import React from 'react';
import { View, Text , StyleSheet, Image} from 'react-native';

export default function MovieDetails({navigation}) {
  const uri = navigation.getParam('poster')
  const title = navigation.getParam('title')
  const year = navigation.getParam('year')
  const type = navigation.getParam('type')
  const id = navigation.getParam('id')
  return (
    <View style={styles.container}>
      <Image source={{uri:uri}} style={styles.img}/>
      <Text style={{fontSize:22, fontWeight:'bold'}}>{title}</Text>
      <Text>Released: {year}</Text>
      <Text>Type: {type}</Text>
     </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding:40
  },
  img:{
    width:'60%',
    height:260
  }
});
