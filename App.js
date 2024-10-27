import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import LanguageItem from './components/LanguageItem';

const langs = [
  { id: '1', lang: 'Python', experience: 3, png: 'https://images.app.goo.gl/L4wsV9JFMb2Pr75s7' },
  { id: '2', lang: 'JavaScript', experience: 2, png: 'https://images.app.goo.gl/BBn37tPmHfyGPHEM6' },
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
