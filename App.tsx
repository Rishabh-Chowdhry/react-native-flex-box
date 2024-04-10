import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import FancyCard from './src/components/FancyCard';
import ActionCard from './src/components/ActionCard';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FancyCard />
        <ActionCard />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
