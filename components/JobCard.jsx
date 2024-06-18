import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const JobCard = ({ job, isFeatured, isPopular }) => {
  return (
    <View style={[
      styles.card, 
      isFeatured && styles.featuredCard,
      isPopular && styles.popularCard
    ]}>
      <Text style={styles.company}>{job.company}</Text>
      <Text style={styles.position}>{job.position}</Text>
      <Text style={styles.salary}>{job.salary}</Text>
      <Text style={styles.location}>{job.location}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 16,
    margin: 8,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 5,
  },
  featuredCard: {
    width: 230,
    height: 140,
    borderRadius: 20,
  },
  popularCard: {
    height: 120,
    borderRadius: 15,
  },
  company: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  position: {
    fontSize: 14,
    marginVertical: 4,
  },
  salary: {
    color: '#28a745',
  },
  location: {
    color: '#6c757d',
  },
});

export default JobCard;

