import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Content({children}) {

  return (
    <View style={styles.container}>
      <Text style={styles.TextStyle}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      alignItems : 'center',
      
    },
    TextStyle :{
      fontSize : 24,
      color : 'white',
      backgroundColor : '#c30b64',
      borderRadius : 10
    }
  });