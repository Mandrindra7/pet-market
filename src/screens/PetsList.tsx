import {
  StyleSheet,
  TouchableOpacity,
  View,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import PetsCard from '../components/PetsCard';
import {Pet, getAllPets} from '../data/Pets';;

const PetsList = ({navigation}: {navigation: any}) => {
  const [pets, setPets] = useState<Pet[]>([]);

  useEffect(() => {
    const res: Pet[] = getAllPets();
    setPets(res);
  }, []);

  const renderItem = ({item}: {item: Pet}) => (
    <TouchableOpacity
      style={{margin: 4}}
      onPress={() => navigation.navigate('pet-detail', {id: item.id})}
      key={item.id}>
      <PetsCard {...item} />
    </TouchableOpacity>
  );
  return (
    <View style={styles.container}>
      {pets.length > 0 && (
        <FlatList
          data={pets}
          numColumns={2}
          renderItem={renderItem}
          keyExtractor={(item: any) => item.id}
        />
      )}
    </View>
  );
};

export default PetsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    alignItems: 'center',
  },
});
