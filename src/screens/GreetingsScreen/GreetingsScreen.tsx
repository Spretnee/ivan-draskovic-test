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
import { formatTime } from '../PlayerScreen/Slider/utils/formatTime';

//TODO: refactor screen

const GreetingsScreen = () => {
  const { queue, controls, currentTrack, currentTrackIndex, getTrackPosition } =
    usePlayerContext();

  const { isBuffering, isConnecting, isPlaying } = useCustomPlaybackState();

  return (
    <View>
      <FlatList
        data={queue}
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
                    {item.date}
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
