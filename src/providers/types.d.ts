import { Track } from 'react-native-track-player';
import { Controls } from '../hooks/types';
import { PodcastMetadata, Queue } from '../api/types';
import { TrackWithId } from '../types';

export type PlayerStateProviderProps = {
  children: React.ReactNode;
  queue: Track[] | undefined;
  podcastMetadata: PodcastMetadata | undefined;
};
export type MultiTrackProgress = Record<string, number>;

export type PlayerStateContextType = {
  currentTrack: TrackWithId | Track;
  currentTrackIndex: number | null;
  podcastMetadata: PodcastMetadata | undefined;
  queue: Track[] | undefined;
  controls: Controls;
  getTrackPosition: (truckId: string) => number;
};
