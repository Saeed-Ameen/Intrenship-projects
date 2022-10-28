
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Blog from './screens/blog';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BLOGS } from './data/dummy-data';
import BlogsScreen from './screens/BlogsScreen';
import BlogsOverviewScreen from './screens/BlogsOverviewScreen';



export default function App() {
  const Stack = createNativeStackNavigator();

  const blogs = BLOGS.map((item) => (<Blog key={item.id} title={item.title} content={item.content} />
  ));
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: '#351401' },
            headerTintColor: 'white',
            contentStyle: { backgroundColor: '#3f2f25' },
          }}
        >
          <Stack.Screen name="Blogs" component={BlogsScreen} />
          <Stack.Screen
            name="BlogsOverviewScreen"
            component={BlogsOverviewScreen}
            options={{
              title: 'About the Meal',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
