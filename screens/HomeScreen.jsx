import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import profileImage from '../assets/profileImage.jpg';
import SearchSection from '../components/SearchSection';
import CardList from '../components/CardList';

const HomeScreen = ({ route }) => {
  const { name, email } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.containerMini}>
        <View style={styles.profile}>
          <View style={styles.userInfo}>
            <Text style={styles.userName}>{name}</Text>
            <Text style={styles.userEmail}>{email}</Text>
          </View>
          <Image source={profileImage} style={styles.userPicture} />
        </View>
      </View>

      <SearchSection />

      {/* <View style={styles.header}>
        <Text style={styles.fText}>Featured Jobs</Text>
        <Text style={styles.optTxt}>See all</Text>
      </View> */}

      <CardList />

      {/* <View style={styles.headerTwo}>
        <Text style={styles.fText}>Popular Jobs</Text>
        <Text style={styles.optTxt}>See all</Text>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafd',
    padding: 1,
  },

  containerMini: {
    marginTop: 20,
    marginRight: 15,
    marginLeft: 15,
  },

  profile: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0D0D26',
  },
  userEmail: {
    fontSize: 18,
    color: '#878787',
  },
  userPicture: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },

  header: {
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  headerTwo: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  fText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#0D0D26',
  },

  optTxt: {
    fontSize: 17,
    color: '#95969D',
  },
});

export default HomeScreen;
