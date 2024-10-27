import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const LanguageItem = ({ lang, experience, png }) => {
  return (
    <View style={styles.container}>
      <Image 
        style={styles.logo}
        source={{ uri: png }}
      />
      <View>
        <Text style={styles.langName}>{lang}</Text>
        <Text style={styles.experience}>Опыт: {experience} лет</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  logo: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  langName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  experience: {
    fontSize: 14,
    color: 'gray',
  },
});

export default LanguageItem;
