import {createContext, useContext, useEffect, useState} from 'react';
import TrackPlayer, {
  Event,
  State,
  Track,
  usePlaybackState,
  useTrackPlayerEvents,
} from 'react-native-track-player';
import {
  MultiTrackProgress,
  PlayerStateContextType,
  PlayerStateProviderProps,
} from './types';
import {useControls} from '../hooks/useControls';
import {TrackWithId} from '../types';

const PlayerContext = createContext<PlayerStateContextType>({
  isPlaying: false,
  isReady: false,
  isPaused: false,
  isIdle: false,
  isBuffering: false,
  isConnecting: false,
  currentTrack: {
    id: '',
    url: ``,
  },
  currentTrackIndex: null,
  queue: [],
  controls: {
    play: async () => {},
    onSlidingComplete: async () => {},
    skip: async () => {},
    jumpForward30: async () => {},
    jumpBack15: async () => {},
    next: async () => {},
    previous: async () => {},
    pause: async () => {},
    reset: async () => {},
  },
  getTrackPosition: () => 0,
});

const PlayerStateProvider = ({children, queue}: PlayerStateProviderProps) => {
  const controls = useControls();
  const [currentTrack, setCurrentTrack] = useState<TrackWithId | Track>({
    id: '',
    url: ``,
  });

  const [currentTrackIndex, setCurrentTrackIndex] = useState<number | null>(
    null,
  );

  const [multiTrackProgress, setMultiTrackProgress] =
    useState<MultiTrackProgress>({});
  const playbackState = usePlaybackState();

  const handleMultiTrackProgress = (id: string, position: number) => {
    setMultiTrackProgress(prevMultiTrackProgress => {
      return {
        ...prevMultiTrackProgress,
        [id]: position,
      };
    });
  };

  useTrackPlayerEvents(
    [Event.PlaybackTrackChanged, Event.PlaybackProgressUpdated],
    async event => {
      if (
        event.type === Event.PlaybackTrackChanged &&
        event.nextTrack != null
      ) {
        const track = await TrackPlayer.getTrack(event.nextTrack);
        const index = await TrackPlayer.getCurrentTrack();

        if (track) {
          setCurrentTrack(track);
        }

        setCurrentTrackIndex(index);
      }

      if (event.track != null && event.type === Event.PlaybackProgressUpdated) {
        const track = await TrackPlayer.getTrack(event.track);
        handleMultiTrackProgress(track?.id, event.position);
      }
    },
  );

  const getTrackPosition = (trackId: string): number => {
    return multiTrackProgress[trackId] || 0;
  };

  const playerState = {
    isPlaying: playbackState === State.Playing,
    isPaused: playbackState === State.Paused,
    isReady: playbackState === State.Ready,
    isIdle: playbackState === State.None,
    isBuffering: playbackState === State.Buffering,
    isConnecting: playbackState === State.Connecting,
    isLoading:
      playbackState === State.Buffering || playbackState === State.Connecting,
  };

  type PlayerState = typeof playerState;

  const context: PlayerStateContextType = {
    isPlaying: playbackState === State.Playing,
    isPaused: playbackState === State.Paused,
    isReady: playbackState === State.Ready,
    isIdle: playbackState === State.None,
    isBuffering: playbackState === State.Buffering,
    isConnecting: playbackState === State.Connecting,
    currentTrack: currentTrack,
    currentTrackIndex: currentTrackIndex,
    queue: queue,
    controls: controls,
    getTrackPosition: getTrackPosition,
  };

  console.log(playbackState);
  return (
    <PlayerContext.Provider value={context}>{children}</PlayerContext.Provider>
  );
};

const usePlayerContext = () => useContext(PlayerContext);

export {PlayerContext, PlayerStateProvider, usePlayerContext};
