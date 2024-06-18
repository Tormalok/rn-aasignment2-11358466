import React from 'react';
import { TextInput, View, Image, StyleSheet } from 'react-native';

const SearchSection = () => {
  return (
    <View style={styles.container}>
      <View style={styles.searchSection}>
        <View style={styles.searchField}>
          <Image
            source={require('../assets/search.png')}
            style={styles.searchIcon}
          />
          <TextInput
            style={styles.searchInput}
            placeholder="Search for job or position"
          />
        </View>
        <View style={styles.slider}>
          <Image
            source={require('../assets/slider.png')}
            style={styles.sliderIcon}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginRight: 15,
    marginLeft: 15,
  },

  searchSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 40,
  },
  searchField: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F2F2F3',
    borderRadius: 20,
    flex: 1,
    marginRight: 10,
  },
  searchIcon: {
    marginRight: 5,
    marginLeft: 10,
    width: 30,
    height: 30,
  },
  searchInput: {
    fontSize: 17,
  },
  sliderIcon: {
    height: 30,
    width: 30,
  },
  slider: {
    backgroundColor: '#007FFF',
    padding: 10,
    borderRadius: 15,
  },
});

export default SearchSection;
