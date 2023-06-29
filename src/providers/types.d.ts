import {Track} from 'react-native-track-player';
import {Controls} from '../hooks/types';
import {Queue} from '../api/types';
import {TrackWithId} from '../types';

export type PlayerStateProviderProps = {
  children: React.ReactNode;
  queue: Queue | undefined;
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
  currentTrack: TrackWithId | Track;
  currentTrackIndex: number | null;

  queue: Queue | undefined;
  controls: Controls;
};
