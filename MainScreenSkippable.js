import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

const BottomSection = () => {
  return (
    <View style={styles.bottomContainer}>
      <Text>Alsó szekció</Text>
    </View>
    
  );
};

const CustomScreen = () => {
  return(
  <View style={styles.content}>
        <Text>Adatbázisból lekért adatok</Text>
      </View>
  )
}

const ScrollableLayout = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.topContainer}>
        <Text>Felső szekció</Text>
      </View>
      <CustomScreen/>
      <BottomSection />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  content: {
    padding: 20,
    alignItems: 'center',
  },
  container: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  topContainer: {
    padding: 20,
    backgroundColor: '#e0e0e0',
    alignItems: 'center',
  },
  bottomContainer: {
    padding: 20,
    backgroundColor: '#c0c0c0',
    alignItems: 'center',
  },
});

export default ScrollableLayout;