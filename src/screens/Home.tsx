import React, {useEffect} from 'react';
import {Image, StyleSheet, View, Text, ScrollView} from 'react-native';

import PetsCard from '../components/PetsCard';
import { Pets} from '../data/Pets';
import { TouchableHighlight } from 'react-native';

const data = [...Pets];
const Home = ({ navigation }: {navigation: any}) => {

  return (
    <View style={styles.container}>
 
       <TouchableHighlight
        style={styles.market}
        onPress={() => navigation.navigate('Pets')}>
        <Image
          style={{height: 150, width: undefined}}
          source={require('./../assets/petmarket.jpg')}
        />
      </TouchableHighlight>
        {/* <Text style={styles.title}>Pet MarketPlace</Text> */}
  
      <View style={{height: 2, backgroundColor: 'gray'}} />

      <View style={styles.swipper}>
        <Image style={styles.logo} source={require('../assets/ME.png')} />
        <ScrollView  horizontal={true}>
          {data &&
            data.map(item => (
              <TouchableHighlight style={{marginLeft: 10}} onPress={() => navigation.navigate("pet-detail", { id: item.id})} key={item.id}>
                <PetsCard {...item} />
              </TouchableHighlight>
            ))}
        </ScrollView>
      </View>
      <View style={{height: 2, backgroundColor: 'gray', marginBottom: 30}} />

      <TouchableHighlight
        style={styles.news}
        onPress={() => navigation.navigate('News')}>
        <Image
          style={{height: 150, width: undefined}}
          source={require('./../assets/news.jpg')}
        />
      </TouchableHighlight>
    
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 1,
    marginVertical: 20,
  },
  container: {
    flex: 1,
  },
  logo: {
    width: 40,
    height: 40,
    marginVertical: 5,
  },
  swipper: {
    width: '100%',
    height: 50,
    //backgroundColor:"#fc5c65",
    flex: 1.5,
  },
  market: {
    flex: 1,
    marginBottom: 15,
    padding: 5,
  },
  news: {
    flex: 1,
    width: '100%',
    height: 50,
    marginBottom: 5,
    padding: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Poppins',
    color: 'tomato',
  },
});
export default Home;
