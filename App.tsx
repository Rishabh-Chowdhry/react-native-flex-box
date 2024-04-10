import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import FancyCard from './src/components/FancyCard';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FancyCard />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
