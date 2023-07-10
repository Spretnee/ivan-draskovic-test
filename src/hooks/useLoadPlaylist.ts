import { useEffect, useMemo, useState } from 'react';
import TrackPlayer, { Track } from 'react-native-track-player';
import { Podcast, PodcastMetadata } from '../api/types';
import { formatPlaylist } from '../utils/player/formatPlaylist';
import { addTrack } from '../utils/player/addTrack';

export const useLoadPlaylist = (podcast: Podcast | undefined) => {
  const [queue, setQueue] = useState<Track[]>();
  const [podcastMetadata, setPodcastMetadata] = useState<PodcastMetadata>();
  const setPlaylist = async () => {
    try {
      const tracks = await TrackPlayer.getQueue();
      setQueue(tracks);
    } catch (e) {
      console.error('no queue', e);
    }
  };

  const loadPlaylist = async () => {
    try {
      await TrackPlayer.reset();
      if (podcast) {
        await addTrack(formatPlaylist(podcast));
        const { episodes, ...metadata } = podcast;
        setPodcastMetadata(metadata);
      }

      await setPlaylist();
    } catch {}
  };

  useMemo(() => {
    loadPlaylist();
  }, [podcast]);

  return { podcast, queue, podcastMetadata };
};
