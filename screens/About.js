import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { Button, Card, Layout, Text, useStyleSheet } from '@ui-kitten/components';
import { bookStore } from '../data/books';
import { StyleService } from '@ui-kitten/components';

export default function About({ navigation }) {
  const [data, setData] = useState();
  const styles = useStyleSheet(themedStyles);

  const addingData = () => {
    console.log("started");
    setData(bookStore);
  };

  return (
    <Layout style={styles.container}>
      <Text category="h4">Welcome to the Dashboard</Text>
      <Button onPress={() => addingData()}>Show Data</Button>
      <ScrollView style={styles.cardContainer}>
        {data &&
          data.books.map((b, index) => {
            if (b.category.toLowerCase() === 'java') {
              return (
                <Card key={index} style={styles.card}>
                  <Text category="h6">{b.title}</Text>
                  {b.authors &&
                    b.authors.map((a, ind) => {
                      return <Text key={ind}>{a}</Text>;
                    })}
                </Card>
              );
            }
          })}
      </ScrollView>
    </Layout>
  );
}

const themedStyles = StyleService.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-start',
      backgroundColor: '#F4F4F4', 
      padding: 24, 
    },
    title: {
      marginBottom: 16, 
      fontSize: 24,
      fontWeight: 'bold', 
    },
    button: {
      marginVertical: 16, 
    },
    cardContainer: {
      flex: 1,
      width: '100%',
      marginTop: 16,
    },
    card: {
      marginBottom: 16, 
      borderRadius: 8, 
      elevation: 4, 
    },
    bookTitle: {
      fontSize: 18,
      fontWeight: 'bold',
    },
  });