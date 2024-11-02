import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import LanguageItem from './LanguageItem';

const langs = [
  { id: '1', lang: 'Python', experience: 3, png: 'https://img.icons8.com/?size=100&id=l75OEUJkPAk4&format=png&color=000000' },
  { id: '2', lang: 'JavaScript', experience: 2, png: 'https://img.icons8.com/?size=100&id=PXTY4q2Sq2lG&format=png&color=000000' },
];

export default function App() {
  return (
    <View style={styles.container}>
      <FlatList
        data={langs}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <LanguageItem lang={item.lang} experience={item.experience} png={item.png} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
  },
});
