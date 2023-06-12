import { StyleSheet, Text, View,Image } from 'react-native';
import React from 'react';

export interface New {
    author: string
    content: string
    description : string
    publishedAt: string
    title: string
    url:string
    urlToImage: string
} 
const NewCard: React.FC<New>= (props) => {
  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString()
  }
  return (
    <View style={styles.container}>
      <Image resizeMode='cover' style={styles.image} source={{ uri: props.urlToImage}}/>
      <View style={styles.content}>
            <Text style={styles.label}>Author: <Text  style={styles.text}>{props.author || 'unknown author'}</Text></Text>
            <Text style={styles.label}>Title: <Text  style={styles.text}>{props.title}</Text></Text>
            <Text style={styles.label}>Date de publication: <Text  style={styles.text}>{formatDate(props.publishedAt)}</Text></Text>
      </View> 
    </View>
  )
}

export default NewCard

const styles = StyleSheet.create({
    container : {
        flex: 1,
        flexDirection: 'row',
        width: 350,
        height: 100,
        backgroundColor: "#FFF",
        borderWidth: 1,
        borderColor: 'tomato',
        elevation: 5
    },
    image : {
       width: 100,
       height: 98

    },
    content: {
      flex:1,
      marginLeft: 3,
      padding: 3
    },
    label : {
        fontFamily: 'Poppins',
        fontSize: 12,
        fontWeight: '700',
        color:'tomato',
        marginBottom: 3
    },
    text: {
        fontWeight: '400',
        color:'#000',
        textAlign: 'left'
    }
})