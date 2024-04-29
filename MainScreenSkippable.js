import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, StyleSheet, FlatList } from 'react-native';
import { openDatabase } from 'expo-sqlite';

const BottomSection = () => {
  return (
    <View style={styles.bottomContainer}>
    </View>
  );
};

const CustomScreen = () => {
  const [connectionStatus, setConnectionStatus] = useState('Connecting...');
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const db = openDatabase('EventDB3');

    db.transaction(
      (tx) => {
        tx.executeSql(
          'CREATE TABLE IF NOT EXISTS events (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, eventDate DATETIME, eventName TEXT, description TEXT)',
          [],
          () => {
            setConnectionStatus('Connected');
            console.log('Database opened successfully');

            tx.executeSql(
              'SELECT COUNT(*) as count FROM events',
              [],
              (_, { rows }) => {
                const count = rows._array[0].count;
                if (count === 0) {
                  const sampleEvents = [
                    ['2024-05-01 10:00-12:00', 'Conference 1', 'Conference about water,  Teszt Elek'],
                    ['2024-05-02 15:00-17:00', 'Conference 2', 'Conference about the earth, and sustainable economy, Kovács Mária'],
                  ];

                  sampleEvents.forEach((event) => {
                    tx.executeSql(
                      'INSERT INTO events (eventDate, eventName, description) VALUES (?, ?, ?)',
                      event,
                      () => console.log('Event inserted successfully'),
                      (error) => console.error('Error inserting event:', error)
                    );
                  });
                }
                tx.executeSql(
                  'SELECT * FROM events',
                  [],
                  (_, { rows }) => {
                    setEvents(rows._array);
                  },
                  (error) => console.error('Error fetching events:', error)
                );
              },
              (error) => {
                console.error('Error checking table:', error);
              }
            );
          },
          (error) => {
            setConnectionStatus('Connection Failed');
            console.error('Error creating table:', error);
          }
        );
      },
      (error) => {
        setConnectionStatus('Connection Failed');
        console.error('Database transaction error:', error);
      }
    );
  }, []);

  return (
    <View style={styles.content}>
      {connectionStatus === 'Connected' ? (
        events.length > 0 ? (
          <FlatList
            data={events}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.conferenceContainer}>
                <Text>Conference Date: {item.eventDate}</Text>
                <Text>Conference Name: {item.eventName}</Text>
                <Text>Conference description and leader: {item.description}</Text>
              </View>
            )}
          />
        ) : (
          <Text>No data in the database</Text>
        )
      ) : (
        <Text>{connectionStatus}</Text>
      )}
    </View>
  );
};

const ScrollableLayout = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <CustomScreen />
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
  conferenceContainer: {
    marginBottom: 20, 
  },
});

export default ScrollableLayout;