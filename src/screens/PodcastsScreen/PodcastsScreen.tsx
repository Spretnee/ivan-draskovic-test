import { ActivityIndicator, Pressable, SafeAreaView, View } from 'react-native';
import React, { useEffect, useMemo } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { Text } from '../../components/Text';
import { BACKGROUND, FONT_DARK1, GREEN } from '../../constants/colors';
import { SliderMinimized } from '../HomeScreen/SliderMinimized';
import { useCustomPlaybackState } from '../../hooks/useCustomPlaybackState';
import { SvgXml } from 'react-native-svg';
import { PAUSE, PLAY_BUTTON } from '../../assets/images/svg';
import { formatDate } from '../PlayerScreen/Slider/utils/formatDate';
import { Image } from '../PlayerScreen/Image/Image';
import { useControls } from '../../hooks/useControls';
import { useSelectPlayerStore } from '../../store/playerSlice';
import { useGetPodcast } from '../../hooks/useGetPodcast';
import { loadTracks } from '../../utils/player/loadTracks';
import { useLoadPlaylist } from '../../hooks/useLoadPlaylist';
import { MOCK_PODCAST_ID } from '../../api/constants';

//TODO: refactor screen

export const PodcastsScreen = ({ route }: any) => {
  const { isPlaying, isLoading: isPlayerLoading } = useCustomPlaybackState();
  const controls = useControls();

  const { data, isLoading: isDataLoading } = useGetPodcast(route.params.id);

  const { currentTrack, currentTrackIndex, multiTrackProgress } =
    useSelectPlayerStore();

  const isQueueLoaded = useMemo(
    () =>
      currentTrackIndex
        ? data?.episodes.data[currentTrackIndex].id === currentTrack.id
        : false,
    [data],
  );

  if (isDataLoading) {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          justifyContent: 'center',
          padding: 20,
          backgroundColor: BACKGROUND,
        }}
      >
        <ActivityIndicator size="large" color={GREEN} />
      </SafeAreaView>
    );
  }

  return (
    <View>
      <FlatList
        data={data?.episodes.data}
        ListHeaderComponent={() => (
          <View style={{ padding: 8 }}>
            <Text
              type={'H2'}
              style={{
                marginVertical: 10,
                justifyContent: 'center',
              }}
            >
              {data?.title}
            </Text>
            <Text type={'H3'} numberOfLines={4}>
              {data?.description}
            </Text>
            <Image url={data?.imageUrl} style={{ marginVertical: 20 }} />
            <Text type={'H2'}>All Episodes</Text>
          </View>
        )}
        renderItem={({ item, index }) => {
          return (
            <View style={{ padding: 12 }}>
              <View
                style={{
                  paddingVertical: 13,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: '100%',
                }}
              >
                <View style={{ alignItems: 'flex-start', width: '85%' }}>
                  <Image
                    url={item.imageUrl || data?.imageUrl}
                    style={{
                      width: 60,
                      height: 60,
                    }}
                  />
                  <Text
                    type={'H3'}
                    style={{
                      color:
                        index === currentTrackIndex &&
                        (isPlaying || isPlayerLoading)
                          ? GREEN
                          : FONT_DARK1,
                    }}
                  >
                    {item.title}
                  </Text>
                  <Text
                    type={'H5'}
                    style={{
                      color:
                        index === currentTrackIndex &&
                        (isPlaying || isPlayerLoading)
                          ? GREEN
                          : FONT_DARK1,
                    }}
                  >
                    {formatDate(item.airDate)}
                  </Text>
                  <Text
                    type={'H5'}
                    style={{
                      color:
                        index === currentTrackIndex &&
                        (isPlaying || isPlayerLoading)
                          ? GREEN
                          : FONT_DARK1,
                    }}
                  >
                    {`${
                      multiTrackProgress[item.id]
                        ? Math.round(
                            (item.length - multiTrackProgress[item.id] || 0) /
                              60,
                          )
                        : Math.round(item.length / 60)
                    } mins left`}
                  </Text>
                </View>

                {isPlayerLoading && currentTrack.id === item.id ? (
                  <ActivityIndicator
                    size={'large'}
                    color={GREEN}
                    style={{ padding: 10, justifyContent: 'flex-end' }}
                  />
                ) : (
                  <Pressable
                    onPress={
                      isPlaying && currentTrack.id === item.id
                        ? controls.pause
                        : () => {
                            if (!isQueueLoaded) {
                              loadTracks(data);
                            }
                            controls.skip(
                              index,
                              multiTrackProgress[item.id] || 0,
                            );
                          }
                    }
                    style={{
                      padding: 10,
                      alignSelf: 'flex-end',
                    }}
                  >
                    <SvgXml
                      xml={
                        isPlaying && currentTrack.id === item.id
                          ? PAUSE
                          : PLAY_BUTTON
                      }
                    />
                    {/* TODO: redo Icons Wrapper */}
                  </Pressable>
                )}
              </View>
              <SliderMinimized
                position={multiTrackProgress[item.id] || 0}
                duration={item.length}
              />
            </View>
          );
        }}
        keyExtractor={item => item.id}
      />

      {/* <Title /> */}
    </View>
  );
};
