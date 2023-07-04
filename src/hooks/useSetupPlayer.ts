import TrackPlayer, {Track} from 'react-native-track-player';
import {Podcast, Queue} from '../api/types';
import {useEffect, useState} from 'react';
import {formatPlaylist} from '../utils/player/formatPlaylist';
import {checkPlayerIsSetup} from '../utils/player/checkPlayerSetup';
import {addTrack} from '../utils/player/addTrack';

export const useSetupPlayer = (podcast: Podcast | undefined) => {
  const [queue, setQueue] = useState<Track[]>();

  const setPlaylist = async () => {
    try {
      const tracks = await TrackPlayer.getQueue();
      setQueue(tracks);
    } catch (e) {
      console.error('no queue', e);
    }
  };

  const setupPlayer = async (podcast: Podcast) => {
    const isSetup = await checkPlayerIsSetup();
    if (isSetup) {
      try {
        await TrackPlayer.reset();
        await addTrack(formatPlaylist(podcast));
        await setPlaylist();
      } catch (e) {
        console.error('no podcast', e);
      }
    } else {
      console.error('No playlist available');
    }
  };

  useEffect(() => {
    if (podcast) {
      setupPlayer(podcast);
    }
  }, [podcast]);

  return {podcast, queue};
};
