import {
  StyleSheet,
  Text,
  View,
  Linking,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
const blogImg = require('../assets/images/pexels-henry-acevedo-20067135.jpg');

export default function ActionCard() {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink).catch(err =>
      console.error('Error opening link:', err),
    );
  }

  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.elevated]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>
            What's new in JavaScript 21- Es 12?
          </Text>
        </View>
        <Image
          source={{
            uri: 'https://images.pexels.com/photos/10255583/pexels-photo-10255583.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          }}
          style={styles.cardImage}
        />
        <View style={styles.bodyContainer}>
          <Text style={styles.headerText}>
            The 12th edition of ECMAScript introduces these features: replaceAll
            Promise.Any AggregateError WeakRef &&=, ||= and ??= Numeric
            separators
          </Text>
        </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity
            onPress={() =>
              openWebsite(
                'https://royalisms.medium.com/javascript-es2021-new-es21-features-you-need-to-see-8ed2884254a3',
              )
            }>
            <Text style={styles.socialText}>Read More</Text>
          </TouchableOpacity>
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
  card: {
    width: 370,
    height: 360,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 6,
  },
  elevated: {
    backgroundColor: '#FFFFFF',
    elevation: 4,
    shadowOffset: {height: 4, width: 4},
  },
  headingContainer: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  headerText: {
    color: '#000000',
    fontSize: 16,
    fontWeight: '700',
  },
  cardImage: {
    height: 180,
    marginBottom: 8,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  bodyContainer: {
    padding: 10,
    flexShrink: 1,
  },
  footerContainer: {padding: 8, alignItems: 'center', flexDirection: 'row'},
  socialText: {
    fontSize: 16,
    color: '#000000',
    backgroundColor: 'red',
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 4,

    alignItems: 'center',
    justifyContent: 'center',
  },
});
