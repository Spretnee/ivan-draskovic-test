import { Track } from 'react-native-track-player';
import { Controls } from '../hooks/types';
import { PodcastMetadata, Queue } from '../api/types';
import { TrackWithId } from '../types';

export type PlayerStateProviderProps = {
  children: React.ReactNode;
};
export type MultiTrackProgress = Record<string, number>;

export type PlayerStateContextType = {
  currentTrack: TrackWithId | Track;
  currentTrackIndex: number | null;
  controls: Controls;
  getTrackPosition: (truckId: string) => number;
};
