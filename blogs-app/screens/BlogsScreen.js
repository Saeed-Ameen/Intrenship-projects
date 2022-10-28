import { FlatList , Text , } from 'react-native';
import BlogGridTile from '../components/BlogGridTile';
import { BLOGS } from '../data/dummy-data';

function BlogsScreen({ navigation }) {
  function renderBlogItem(itemData) {
    
    function pressHandler() {
      navigation.navigate('BlogsOverviewScreen', {
        blogId : itemData.item.id
      });
    }

    return (
      <BlogGridTile
        title={itemData.item.title}
        color={'red'}
        onPress={pressHandler}
      />
    );
  }

  return (
    <FlatList
      data={BLOGS}
      keyExtractor={(item) => item.id}
      renderItem={renderBlogItem}
      numColumns={2}
    />
  );
}

export default BlogsScreen;
