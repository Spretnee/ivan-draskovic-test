import {createContext} from 'react';
import {
  State,
  Event,
  usePlaybackState,
  useProgress,
} from 'react-native-track-player';

type ChildrenType = {
  children: React.ReactNode;
};

type PlayerStateContextType = {
  isPlaying: boolean;
  isReady: boolean;
  isPaused: boolean;
  isIdle: boolean;
  isBuffering: boolean;
  isConnecting: boolean;

  progressBarBuffered: number;
  progressBarPosition: number;
  progressBarDuration: number;
};

const PlayerStateContext = createContext<PlayerStateContextType>({
  isPlaying: false,
  isReady: false,
  isPaused: false,
  isIdle: false,
  isBuffering: false,
  isConnecting: false,
  progressBarBuffered: 0,
  progressBarPosition: 0,
  progressBarDuration: 0,
});

const events = [Event.PlaybackState, Event.PlaybackError];

const PlayerStateProvider = ({children}: ChildrenType) => {
  const {buffered, duration, position} = useProgress();
  const playbackState = usePlaybackState();

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
  };
  console.log(playbackState);
  return (
    <PlayerStateContext.Provider value={context}>
      {children}
    </PlayerStateContext.Provider>
  );
};

export {PlayerStateContext, PlayerStateProvider};
