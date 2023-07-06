import {ActivityIndicator, Pressable, View} from 'react-native';
import React from 'react';
import {Title} from '../HomeScreen/Title';
import {BottomSheetPlayer} from '../../components/BottomSheetPlayer/BottomSheetPlayer';
import {useNavigation} from '@react-navigation/native';
import {FlatList} from 'react-native-gesture-handler';
import {usePlayerContext} from '../../providers/PlayerProvider';
import {Text} from '../../components/Text';
import {PlayPause} from '../../components/PlayPause';
import {useControls} from '../../hooks/useControls';
import {
  BACKGROUND,
  FONT_DARK1,
  GREEN,
  GREEN_LIGHT,
} from '../../constants/colors';
import {SliderMinimized} from '../HomeScreen/SliderMinimized';
import {useProgress} from 'react-native-track-player';
import {SvgXml} from 'react-native-svg';
import {PAUSE, PLAY_BUTTON} from '../../assets/images/svg';

//TODO: refactor screen

const GreetingsScreen = () => {
  const {
    queue,
    isPlaying,
    isBuffering,
    isConnecting,
    controls,
    currentTrack,
    currentTrackIndex,
    getTrackPosition,
  } = usePlayerContext();

  return (
    <View>
      <FlatList
        data={queue}
        renderItem={({item, index}) => {
          return (
            <View>
              <View
                style={{
                  paddingVertical: 13,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}
              >
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
                <PlayPause
                  isPlaying={isPlaying && currentTrack.id === item.id}
                  controls={controls}
                  index={index}
                  initialPosition={getTrackPosition(item.id)}
                />
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
