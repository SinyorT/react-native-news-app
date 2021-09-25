/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react'; 
import news_data from './store/news_data.json'
import news_banner_data from './store/news_banner_data.json'
import {
  SafeAreaView, 
  StyleSheet ,
  FlatList
} from 'react-native';
  
function App() {
  return (
    <SafeAreaView style={backgroundStyle}>
     
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
