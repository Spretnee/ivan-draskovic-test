import { useMemo, useState } from 'react';
import TrackPlayer, { Track } from 'react-native-track-player';
import { Podcast } from '../api/types';
import { formatPlaylist } from '../utils/player/formatPlaylist';
import { addTrack } from '../utils/player/addTrack';
import { useAppDispatch } from '../store/hooks';
import { setPodcastMetadata, setQueue } from '../store/playerSlice';

export const useLoadPlaylist = (podcast: Podcast | undefined) => {
  const dispatch = useAppDispatch();

  const setPlaylist = async () => {
    try {
      const tracks = await TrackPlayer.getQueue();
      dispatch(setQueue(tracks));
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
        dispatch(setPodcastMetadata(metadata));
      }

      await setPlaylist();
    } catch {}
  };

  useMemo(() => {
    loadPlaylist();
    if (podcast) {
    }
  }, [podcast]);

  return { podcast };
};
