import {
  ActivityIndicator,
  FlatList,
  Pressable,
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';
import React from 'react';
import { Image } from '../PlayerScreen/Image/Image';
import { Text } from '../../components/Text/Text';
import { GREEN } from '../../constants/colors';
import { useGetPodcastByCategory } from '../../hooks/useGetPodcastByCategory';

export const CategoryScreen = ({ route, navigation }: any) => {
  // TODO:navigaion type safety
  // TODO:fix navigation podastsscreen

  const { category } = route.params;

  const { data, isLoading } = useGetPodcastByCategory(category);

  if (isLoading && !data) {
    return (
      <SafeAreaView style={styles.container}>
        <ActivityIndicator size="large" color={GREEN} />
      </SafeAreaView>
    );
  }

  return (
    <FlatList
      data={data?.data}
      numColumns={2}
      contentContainerStyle={{
        alignItems: 'center',
      }}
      renderItem={({ item }) => (
        <Pressable
          onPress={() => {
            navigation.navigate('PodcastDetails', { id: item.id });
          }}
          style={{
            margin: 8,
          }}
        >
          <Image url={item.imageUrl} />
          <Text
            type={'H4'}
            numberOfLines={2}
            style={{ textTransform: 'capitalize', maxWidth: '45%' }}
          >
            {item.title}
          </Text>
        </Pressable>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: { flex: 1 },
  bottomSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
  },
});
