import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Content from './content';
import Title from './title';

export default function Blog({title, content}) {

  return (
    <View style={styles.container}>
        <View>
            <Title>{title}</Title>
        </View>
        <View>
            <Content>{content}</Content>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex : 1,
    backgroundColor : '#f9beda'
  },
  titleContainer :{

  }, 
  blogContainer : {

  }
});
