import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import FancyCard from './src/components/FancyCard';
import ActionCard from './src/components/ActionCard';
import ContactList from './src/components/ContactList';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FancyCard />
        <ActionCard />
        <ContactList />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
