import { ActivityIndicator, Pressable, View } from 'react-native';
import React from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { usePlayerContext } from '../../providers/PlayerProvider';
import { Text } from '../../components/Text';
import { FONT_DARK1, GREEN } from '../../constants/colors';
import { SliderMinimized } from '../HomeScreen/SliderMinimized';
import { useCustomPlaybackState } from '../../hooks/useCustomPlaybackState';
import { SvgXml } from 'react-native-svg';
import { PAUSE, PLAY_BUTTON } from '../../assets/images/svg';
import { formatDate } from '../PlayerScreen/Slider/utils/formatDate';
import { Image } from '../PlayerScreen/Image/Image';
import { useControls } from '../../hooks/useControls';
import { useSelector } from 'react-redux';
import { PlayerSliceState } from '../../store/playerSlice';
import { useAppSelector } from '../../store/hooks';

//TODO: refactor screen

const GreetingsScreen = () => {
  const { currentTrack, currentTrackIndex, getTrackPosition } =
    usePlayerContext();
  const { isBuffering, isConnecting, isPlaying } = useCustomPlaybackState();
  const controls = useControls();

  const podcastMetadata = useAppSelector(state => state.player.podcastMetadata);
  const queue = useAppSelector(state => state.player.queue);

  return (
    <View>
      <FlatList
        data={queue}
        ListHeaderComponent={() => (
          <View>
            <Text type={'H2'}>{podcastMetadata?.title}</Text>
            <Text type={'H3'}>{podcastMetadata?.description}</Text>
            <Image url={podcastMetadata?.imageUrl} />
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
                }}
              >
                <View>
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
                      (item.duration! - getTrackPosition(item.id)) / 60,
                    )} mins left`}
                  </Text>
                </View>

                {(isBuffering || isConnecting) &&
                currentTrack.id === item.id ? (
                  <ActivityIndicator size={'large'} color={GREEN} />
                ) : (
                  <Pressable
                    onPress={
                      isPlaying && currentTrack.id === item.id
                        ? controls.pause
                        : () => {
                            controls.skip(index, getTrackPosition(item.id));
                            controls.play();
                          }
                    }
                    style={{ padding: 10 }}
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
                position={getTrackPosition(item.id)}
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

export default GreetingsScreen;
