import {createContext, useEffect, useState} from 'react';
import TrackPlayer, {
  Event,
  State,
  Track,
  usePlaybackState,
  useProgress,
  useTrackPlayerEvents,
} from 'react-native-track-player';
import {PlayerStateContextType, PlayerStateProviderProps} from './types';
import {useControls} from '../hooks/useControls';

const PlayerContext = createContext<PlayerStateContextType>({
  isPlaying: false,
  isReady: false,
  isPaused: false,
  isIdle: false,
  isBuffering: false,
  isConnecting: false,
  progressBarBuffered: 0,
  progressBarPosition: 0,
  progressBarDuration: 0,
  currentTrack: undefined,
  currentTrackIndex: undefined,
  setCurrentTrackIndex: () => {},
  queue: [],
  controls: {
    play: async () => {},
    pause: async () => {},
    jumpForward30: async () => {},
    jumpBack15: async () => {},
    onSlidingComplete: async () => {},
    reset: async () => {},
    next: async () => {},
    previous: async () => {},
    skip: async () => {},
  },
});

const PlayerStateProvider = ({children, queue}: PlayerStateProviderProps) => {
  const {buffered, duration, position} = useProgress();
  const controls = useControls(position);
  const [currentTrack, setCurrentTrack] = useState<Track | null>();
  const [currentTrackIndex, setCurrentTrackIndex] = useState<
    number | undefined
  >(undefined);
  const playbackState = usePlaybackState();

  useTrackPlayerEvents([Event.PlaybackTrackChanged], async event => {
    if (event.type === Event.PlaybackTrackChanged && event.nextTrack != null) {
      const track = await TrackPlayer.getTrack(event.nextTrack);
      setCurrentTrack(track);
    }
  });

  const context: PlayerStateContextType = {
    isPlaying: playbackState === State.Playing,
    isPaused: playbackState === State.Paused,
    isReady: playbackState === State.Ready,
    isIdle: playbackState === State.None,
    isBuffering: playbackState === State.Buffering,
    isConnecting: playbackState === State.Connecting,
    progressBarBuffered: buffered,
    progressBarPosition: position,
    progressBarDuration: duration,
    currentTrack: currentTrack,
    currentTrackIndex: currentTrackIndex,
    setCurrentTrackIndex: setCurrentTrackIndex,
    queue: queue,
    controls: controls,
  };

  return (
    <PlayerContext.Provider value={context}>{children}</PlayerContext.Provider>
  );
};

export {PlayerContext, PlayerStateProvider};
