import {Track} from 'react-native-track-player';
import {Controls} from '../hooks/types';

export type PlayerStateProviderProps = {
  children: React.ReactNode;
  queue: Track[] | undefined;
};

export type PlayerStateContextType = {
  isPlaying: boolean;
  isReady: boolean;
  isPaused: boolean;
  isIdle: boolean;
  isBuffering: boolean;
  isConnecting: boolean;

  progressBarBuffered: number;
  progressBarPosition: number;
  progressBarDuration: number;
  currentTrack: Track | undefined | null;
  currentTrackIndex: number | undefined;
  setCurrentTrackIndex: React.Dispatch<
    React.SetStateAction<number | undefined>
  >;
  queue: Track[] | undefined;
  controls: Controls;
};
