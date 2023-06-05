import {ActivityIndicator, AppStateStatus, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './SliderControls.styles';
import {SvgXml} from 'react-native-svg';
import {
  FIFTEEN_BACK,
  PAUSE,
  PLAY_BUTTON,
  THIRTY_FORWARD,
} from '../../../assets/images/svg';
import {Text} from '../../../components/Text';
import TrackPlayer, {
  Event,
  State,
  useTrackPlayerEvents,
} from 'react-native-track-player';

export const SliderControls = () => {
  const [playerState, setPlayerState] = useState<null | State>(null);
  const events = [Event.PlaybackState, Event.PlaybackError];

  useTrackPlayerEvents(events, event => {
    if (event.type === Event.PlaybackError) {
      console.warn('An error occured while playing the current track.');
    }
    if (event.type === Event.PlaybackState) {
      setPlayerState(event.state);
    }
  });

  const isPlaying = playerState === State.Playing;

  return (
    <View>
      <View style={styles.container}>
        <SvgXml xml={FIFTEEN_BACK} onPress={() => {}} />

        {!isPlaying ? (
          <SvgXml
            onPress={() => {
              TrackPlayer.play();
            }}
            xml={PLAY_BUTTON}
          />
        ) : (
          <SvgXml
            onPress={() => {
              TrackPlayer.pause();
            }}
            xml={PAUSE}
          />
        )}

        <SvgXml xml={THIRTY_FORWARD} />
      </View>
      <Text
        style={{position: 'absolute', bottom: '36%', right: 16}}
        type="H3_BOLD">
        1x
      </Text>
      <Text
        style={{position: 'absolute', bottom: '36%', right: 16}}
        type="H3_BOLD">
        1.5x
      </Text>
      <Text
        style={{position: 'absolute', bottom: '36%', right: 16}}
        type="H3_BOLD">
        2x
      </Text>
      <Text
        style={{position: 'absolute', bottom: '36%', right: 16}}
        type="H3_BOLD">
        4x
      </Text>
    </View>
  );
};
