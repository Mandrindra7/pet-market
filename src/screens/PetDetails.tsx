import { Image, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Pet, getOnePet } from '../data/Pets';
import { TouchableHighlight } from 'react-native';

export default function PetDetail({ route }: { route : any}) {
  const[pet, setPet] = useState<Pet | undefined>()
  const { id } = route.params
  useEffect(() => {
    if(id) {
      const res: Pet| undefined = getOnePet(id)
      setPet(res)
    }

  },[id])
  return (
    <View style={styles.container}>
      <View style={styles.card}>
          <Image source={{ width:undefined, height: 400, uri: pet?.imageUrl}} />
          <View style={{ margin : 5 }}>
          <Text style={styles.category}>Category : <Text style={styles.textValue}>{pet?.category}</Text></Text>
          <Text style={styles.category}>Description : <Text style={styles.textValue}>{pet?.description}</Text></Text>
          <Text style={styles.category}>Stock : <Text style={styles.textValue}>{pet?.stock}</Text></Text>
          <Text style={styles.category}>Price : <Text style={styles.textValue}>{pet?.price}</Text></Text>
          </View>
         
      </View>
      <TouchableHighlight style= {styles.button} ><Text style={styles.buttonText}>Add to cart</Text></TouchableHighlight>

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      padding: 10,
    },
    card: {
      backgroundColor: "#FFF",
      borderWidth: 2,
      borderColor: 'tomato',
      padding:2,
      marginBottom: 10,
      borderRadius: 10,
      elevation: 8
    },
    category: {
      fontFamily: "Poppins",
      fontSize: 16,
      fontWeight: '700',
      color: 'tomato'
    },
    textValue: {
      fontWeight: '400',
      color: '#000',
      textAlign: 'justify'
    },
    button: {
      elevation: 8,
      backgroundColor: "tomato",
      borderRadius: 10,
      paddingVertical: 10,
      paddingHorizontal: 12
    },
    buttonText: {
      fontSize: 18,
      color: "#fff",
      fontWeight: "bold",
      alignSelf: "center",
      textTransform: "uppercase"
    }

})