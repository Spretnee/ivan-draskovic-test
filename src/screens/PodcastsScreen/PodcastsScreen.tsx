import { ActivityIndicator, Pressable, View } from 'react-native';
import React from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { Text } from '../../components/Text';
import { FONT_DARK1, GREEN } from '../../constants/colors';
import { SliderMinimized } from '../HomeScreen/SliderMinimized';
import { useCustomPlaybackState } from '../../hooks/useCustomPlaybackState';
import { SvgXml } from 'react-native-svg';
import { PAUSE, PLAY_BUTTON } from '../../assets/images/svg';
import { formatDate } from '../PlayerScreen/Slider/utils/formatDate';
import { Image } from '../PlayerScreen/Image/Image';
import { useControls } from '../../hooks/useControls';
import { useSelectPlayerState } from '../../store/playerSlice';
import TrackPlayer from 'react-native-track-player';
import { MOCK_PODCAST_ID } from '../../api/constants';
import { useGetPodcast } from '../../hooks/useGetPodcast';
import { useLoadPlaylist } from '../../hooks/useLoadPlaylist';

//TODO: refactor screen

export const PodcastsScreen = ({ route }: any) => {
  const { isBuffering, isConnecting, isPlaying } = useCustomPlaybackState();
  const controls = useControls();

  const data = useGetPodcast(MOCK_PODCAST_ID);

  useLoadPlaylist(data.data);

  const {
    queue,
    podcastMetadata,
    currentTrack,
    currentTrackIndex,
    multiTrackProgress,
  } = useSelectPlayerState();

  return (
    <View>
      <FlatList
        data={queue}
        ListHeaderComponent={() => (
          <View style={{ padding: 8 }}>
            <Text
              type={'H2'}
              style={{
                marginVertical: 10,
                justifyContent: 'center',
              }}
            >
              {podcastMetadata?.title}
            </Text>
            <Text type={'H3'}>{podcastMetadata?.description}</Text>
            <Image
              url={podcastMetadata?.imageUrl}
              style={{ marginVertical: 20 }}
            />
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
                    url={
                      item.artwork ? item.artwork : podcastMetadata?.imageUrl
                    }
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
                        (isPlaying || isBuffering || isConnecting)
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
                        (isPlaying || isBuffering || isConnecting)
                          ? GREEN
                          : FONT_DARK1,
                    }}
                  >
                    {formatDate(item.date!)}
                  </Text>
                  <Text
                    type={'H5'}
                    style={{
                      color:
                        index === currentTrackIndex &&
                        (isPlaying || isBuffering || isConnecting)
                          ? GREEN
                          : FONT_DARK1,
                    }}
                  >
                    {`${Math.round(
                      (item.duration! - multiTrackProgress[item.id] || 0) / 60,
                    )} mins left`}
                  </Text>
                </View>

                {(isBuffering || isConnecting) &&
                currentTrack.id === item.id ? (
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
                            controls.skip(
                              index,
                              multiTrackProgress[item.id] || 0,
                            );
                            TrackPlayer.play();
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
                duration={item.duration!}
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
