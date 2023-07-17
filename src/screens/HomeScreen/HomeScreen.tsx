import { Pressable, View } from 'react-native';
import styles from './HomeScreen.styles';
import { FlatList } from 'react-native-gesture-handler';
import { Text } from '../../components/Text/Text';
import { useGetRegionalPodcastMock } from '../../hooks/useGetRegionalPodcastMock';
import { SmallCard } from './SmallCard/SmallCard';
import { useGetPopularPodcastMock } from '../../hooks/useGetPopularPodcastMock';

export const HomeScreen = ({ navigation }: any) => {
  const { data: regionPodcasts } = useGetRegionalPodcastMock();
  const { data: trendingPodcasts } = useGetPopularPodcastMock();

  const goToPodcastDetails = (id: string) => {
    navigation.navigate('Search', { screen: 'PodcastDetails', params: { id } });
  };

  return (
    <View style={styles.title}>
      <Text style={{ margin: 16 }} type={'H2'}>
        Region
      </Text>
      <FlatList
        numColumns={2}
        data={regionPodcasts}
        contentContainerStyle={{ padding: 8 }}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => goToPodcastDetails(item.id)}
            style={{ width: '46%', margin: 8, borderRadius: 8 }}
          >
            <SmallCard image={item?.imageUrl} title={item?.title} />
          </Pressable>
        )}
      />
      <Text style={{ margin: 16 }} type={'H2'}>
        Trending
      </Text>
      <FlatList
        numColumns={2}
        data={trendingPodcasts}
        contentContainerStyle={{ padding: 8 }}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => goToPodcastDetails(item.id)}
            style={{ width: '46%', margin: 8, borderRadius: 8 }}
          >
            <SmallCard image={item?.imageUrl} title={item?.title} />
          </Pressable>
        )}
      />
    </View>
  );
};
