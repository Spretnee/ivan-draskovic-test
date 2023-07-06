import {useEffect, useState} from 'react';
import TrackPlayer, {Track} from 'react-native-track-player';
import {Podcast} from '../api/types';
import {formatPlaylist} from '../utils/player/formatPlaylist';
import {addTrack} from '../utils/player/addTrack';
import {PlayPause} from '../components/PlayPause';

export const useLoadPlaylist = (podcast: Podcast | undefined) => {
  const [queue, setQueue] = useState<Track[]>();

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
      if (podcast) await addTrack(formatPlaylist(podcast));

      await setPlaylist();
    } catch {}
  };

  useEffect(() => {
    loadPlaylist();
  }, [podcast]);

  return {podcast, queue};
};
