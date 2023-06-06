import {View} from 'react-native';
import {styles} from './BottomPlayer.styles';
import {Text} from '../../../components/Text';
import {SvgXml} from 'react-native-svg';
import {PAUSE_SMALL, CLOSE, PLAY_SMALL} from '../../../assets/images/svg';
import {SliderMinimized} from '../SliderMinimized';
import TrackPlayer, {Track, useProgress} from 'react-native-track-player';
import {useContext, useDebugValue, useState} from 'react';
import {PlayerStateContext} from '../../../providers/PlayerStateProvider';
import {PLAYLIST_DATA} from '../../../constants';
import {useGetEpisode} from '../../../api/hooks/useGetEpisode';
import {EPISODE_ID} from '../../../api/constants';
import {Episode} from '../../../api/types';

export const BottomPlayer = () => {
  const {data} = useGetEpisode(EPISODE_ID);

  const {
    isPlaying,
    isPaused,
    isIdle,
    isReady,
    isConnecting,
    isBuffering,
    progressBarDuration,
    progressBarPosition,
  } = useContext(PlayerStateContext);

  if (isPlaying || isPaused || isBuffering || isConnecting) {
    // TODO: fix loading state for minimized player

    return (
      <>
        <View style={styles.container}>
          <View>
            <View style={styles.podcastInfo}>
              <Text type={'H5'} style={styles.textPublicationUpperCase}>
                {`puck : `}
              </Text>
              <Text type={'H5'} style={styles.textPublicationCapitalized}>
                {data?.author}
              </Text>
            </View>
            <Text type={'H7'} style={styles.title}>
              {data?.title}
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            {isPlaying ? (
              <SvgXml
                xml={PAUSE_SMALL}
                onPress={() => {
                  TrackPlayer.pause();
                }}
                style={{marginRight: 19}}
              />
            ) : (
              <SvgXml
                xml={PLAY_SMALL}
                onPress={() => {
                  TrackPlayer.play();
                }}
                style={{marginRight: 19}}
              />
            )}

            <SvgXml
              style={{top: 2}}
              xml={CLOSE}
              onPress={() => {
                TrackPlayer.reset().then(() => TrackPlayer.add([]));
              }}
            />
          </View>
        </View>
        <SliderMinimized
          position={progressBarPosition}
          duration={progressBarDuration}
        />
      </>
    );
  } else {
    return <View></View>;
  }
};
