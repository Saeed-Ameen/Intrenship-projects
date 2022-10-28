
import { StyleSheet, ScrollView } from 'react-native';

import { BLOGS } from '../data/dummy-data';
import Content from './content';
import Title from './title';


function BlogsOverviewScreen({navigation ,route }) {
  const blogId = route.params.blogId;
  
  const displayedBlogs = BLOGS.filter((blogItem) => {
    return blogItem.id === blogId;
  });
  
  return (
    <ScrollView>
      <Title>{displayedBlogs[0].title}</Title>
      <Content>{displayedBlogs[0].content}</Content>
    </ScrollView>
  )
}

export default BlogsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
