import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Title({children}) {

  return (
    <View style={styles.container}>
      <Text style={styles.TextStyle}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems : 'center'
  },
  TextStyle :{
    fontSize : 36,
    fontWeight : 'bold',
    color : '#610440'
  }
});
