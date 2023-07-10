import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
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
import { useControls } from '../hooks/useControls';
import { TrackWithId } from '../types';
import { INITIAL_CURRENT_TRACK_STATE } from './constants';

const PlayerContext = createContext<PlayerStateContextType>({
  podcastMetadata: undefined,
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

const PlayerStateProvider = ({
  children,
  queue,
  podcastMetadata,
}: PlayerStateProviderProps) => {
  const controls = useControls();
  const [currentTrack, setCurrentTrack] = useState<TrackWithId | Track>(
    INITIAL_CURRENT_TRACK_STATE,
  );
  const [currentTrackIndex, setCurrentTrackIndex] = useState<number | null>(
    null,
  );
  const [multiTrackProgress, setMultiTrackProgress] =
    useState<MultiTrackProgress>({});

  const handleMultiTrackProgress = useCallback(
    (id: string, position: number) => {
      setMultiTrackProgress(prevMultiTrackProgress => {
        return {
          ...prevMultiTrackProgress,
          [id]: position,
        };
      });
    },
    [],
  );

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

  const context: PlayerStateContextType = {
    currentTrack: currentTrack,
    currentTrackIndex: currentTrackIndex,
    queue: queue,
    controls: controls,
    getTrackPosition: getTrackPosition,
    podcastMetadata: podcastMetadata,
  };

  return (
    <PlayerContext.Provider value={context}>{children}</PlayerContext.Provider>
  );
};

const usePlayerContext = () => useContext(PlayerContext);

export { PlayerContext, PlayerStateProvider, usePlayerContext };
