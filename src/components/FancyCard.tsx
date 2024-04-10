import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card, styles.elevated]}>
        <Image
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Palace_of_Westminster_from_the_dome_on_Methodist_Central_Hall_%28cropped%29.jpg/900px-Palace_of_Westminster_from_the_dome_on_Methodist_Central_Hall_%28cropped%29.jpg',
          }}
          style={styles.image}
        />
        <View style={styles.cardbody}>
          <Text style={styles.cardTitle}>London</Text>
          <Text style={styles.cardLabel}>River Thames </Text>
          <Text style={styles.cardDescription}>
            London is the capital and largest city of England, and the United
            Kingdom, with a population of around 8.8 million, and the largest
            city in Western Europe by metropolitan area, with a population of
            14.8 million.
          </Text>
          <Text style={styles.cardFooter}>50-mile (80 km)</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  image: {
    height: 180,
    marginBottom: 10,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  card: {
    width: 350,
    height: 360,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 6,
  },
  cardbody: {flex: 1, flexGrow: 1, paddingHorizontal: 12},
  cardTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#000000',
  },
  cardLabel: {
    color: '#000000',
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 6,
  },
  cardFooter: {color: '#000000', fontSize: 14, fontWeight: '600'},
  cardDescription: {
    marginTop: 6,
    color: '#000000',
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 12,
    flexShrink: 1,
  },
  elevated: {
    backgroundColor: '#FFFFFF',
    elevation: 4,
    shadowOffset: {height: 4, width: 4},
  },
});
