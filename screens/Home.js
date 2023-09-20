import React, { useState } from 'react';
import { View } from 'react-native';
import { Button, Layout, Text, useStyleSheet } from '@ui-kitten/components';
import { StyleService } from '@ui-kitten/components';

export default function Home({ navigation }) {
  const [number, setNumber] = useState(1);
  const styles = useStyleSheet(themedStyles);

  const check = () => {
    if (number === 1) {
      console.log('ONE');
    } else if (number === 2) {
      console.log('TWO');
    } else if (number === 3) {
      navigation.push('About');
    }
    console.log(number);
    setNumber(number + 1);
  };

  return (
    <Layout style={styles.container}>
      <Button
        style={[
          styles.button,
          number === 1 && styles.buttonBlue,
          number === 2 && styles.buttonRed,
          number === 3 && styles.buttonGreen,
        ]}
        onPress={() => check()}
      >
        Click Me
      </Button>
    </Layout>
  );
}

const themedStyles = StyleService.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    button: {
      width: 200,
      marginVertical: 10,
    },
    buttonBlue: {
      backgroundColor: 'color-primary-default',
    },
    buttonRed: {
      backgroundColor: 'color-danger-default',
    },
    buttonGreen: {
      backgroundColor: 'color-success-default',
    },
  });