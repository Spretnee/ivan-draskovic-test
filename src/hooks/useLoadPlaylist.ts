import { useMemo, useState } from 'react';
import TrackPlayer, { Track } from 'react-native-track-player';
import { Podcast } from '../api/types';
import { formatPlaylist } from '../utils/player/formatPlaylist';
import { addTrack } from '../utils/player/addTrack';

export const useLoadPlaylist = (podcast: Podcast | undefined) => {
  const setPlaylist = async () => {
    try {
      await TrackPlayer.getQueue();
    } catch (e) {
      console.error('no queue', e);
    }
  };

  const loadPlaylist = async () => {
    try {
      await TrackPlayer.reset();
      if (podcast) {
        await addTrack(formatPlaylist(podcast));
      }

      await setPlaylist();
    } catch {}
  };

  useMemo(() => {
    loadPlaylist();
  }, [podcast]);

  return { podcast };
};
