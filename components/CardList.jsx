import React from 'react';
import { ScrollView, View, StyleSheet, FlatList } from 'react-native';
import Header from './Header';
import JobCard from './JobCard';

const featuredJobs = [
  {
    company: 'Facebook',
    position: 'Software Engineer',
    salary: '$180,000',
    location: 'Accra, Ghana',
  },
  {
    company: 'Google',
    position: 'Software Engineer',
    salary: '$160,000',
    location: 'California, US',
  },
  {
    company: 'Apple',
    position: 'Designer',
    salary: '$190,000',
    location: 'Palo Alto, US',
  },
  {
    company: 'Netflix',
    position: 'Marketer',
    salary: '$110,000',
    location: 'Massachusetts, US',
  },
  {
    company: 'Nvidia',
    position: 'Technical Lead',
    salary: '$200,000',
    location: 'Austin, US',
  },
  {
    company: 'Intel',
    position: 'Designer',
    salary: '$190,000',
    location: 'Palo Alto, US',
  },
  {
    company: 'AMD',
    position: 'Marketer',
    salary: '$110,000',
    location: 'Massachusetts, US',
  },
  {
    company: 'Salesforce',
    position: 'Technical Lead',
    salary: '$200,000',
    location: 'Austin, US',
  },
];

const popularJobs = [
  {
    company: 'Burger King',
    position: 'Jr Executive',
    salary: '$96,000/y',
    location: 'Los Angeles, US',
  },
  {
    company: 'Beats',
    position: 'Product Manager',
    salary: '$84,000/y',
    location: 'Florida, US',
  },
  {
    company: 'McDonalds',
    position: 'Product Manager',
    salary: '$86,000/y',
    location: 'Florida, US',
  },
  {
    company: 'Target',
    position: 'Marketer',
    salary: '$110,000',
    location: 'Massachusetts, US',
  },
  // {
  //   company: 'Cloudflare',
  //   position: 'Technical Lead',
  //   salary: '$200,000',
  //   location: 'Austin, US',
  // },
  // {
  //   company: 'Amazon',
  //   position: 'Designer',
  //   salary: '$190,000',
  //   location: 'Palo Alto, US',
  // },
  // {
  //   company: 'Pixar Animation',
  //   position: 'Marketer',
  //   salary: '$110,000',
  //   location: 'Massachusetts, US',
  // },
  // {
  //   company: 'Activision Blizzard',
  //   position: 'Technical Lead',
  //   salary: '$200,000',
  //   location: 'Austin, US',
  // },
];

const CardList = () => {
  return (
    <View style={styles.container}>
      <Header title="Featured Jobs" />
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.horizontalScroll}
      >
        {featuredJobs.map((job, index) => (
          <JobCard key={index} job={job} isFeatured />
        ))}
      </ScrollView>

      <Header title="Popular Jobs" />
      <FlatList
        data={popularJobs}
        renderItem={({ item }) => <JobCard job={item} isPopular />}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  horizontalScroll: {
    paddingHorizontal: 8,
    height: 200,
  },
});

export default CardList;
