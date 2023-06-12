import {
  FlatList,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {getAllNews} from '../service/news';
import NewCard, {New} from '../components/NewCard';
import { ActivityIndicator } from 'react-native';

const News = () => {
  const [news, setNews] = useState<never[]>([]);

  useEffect(() => {
    getNews();
  }, []);

  const getNews = async () => {
    const res: any = await getAllNews();
    const {data} = res;
    setNews(data.articles);
  };
  const getBrowser = (url: string) => {
    Linking.openURL(url);
  };
  const renderItem = ({item}: {item: New}) => (
    <TouchableOpacity
      style={{margin: 4}}
      onPress={() => getBrowser(item.url)}
      key={item.title}>
      <NewCard {...item} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {news.length > 0 ? (
        <FlatList
          data={news}
          renderItem={renderItem}
          keyExtractor={(item: any) => item.title}
        />
      ): ( <ActivityIndicator size="large" color="tomato" />)}
    </View>
  );
};

export default News;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
