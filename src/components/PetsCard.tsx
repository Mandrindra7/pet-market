import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import React from 'react'
import { Pet } from '../data/Pets'

const PetsCard: React.FC<Pet> = (props) => {
  return (
    <View style={styles.container}>
      <ImageBackground resizeMode='cover' source={{ width: undefined, height:undefined, uri: props.imageUrl }} style={{flex: 1, borderTopEndRadius: 20}}/>
      <Text style={styles.text}>Stock: <Text style={{color: 'tomato'}}>{ props.stock }</Text></Text>
      <Text style={styles.text}>Price: <Text style={{color: 'tomato'}}>{ props.price }$</Text></Text>
    </View>
  )
}

export default PetsCard

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor:'tomato',
    width: 150,
    height: 150,
    padding: 2,
    elevated: 5
  },
  text: {
    fontFamily: "Poppins",
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'justify'
  }
})