import TrackPlayer, {Track} from 'react-native-track-player';
import {PodcastSeriesType} from '../api/types';
import {useEffect, useState} from 'react';
import {formatPlaylist} from '../screens/PlayerScreen/utils/formatPlaylist';
import {checkPlayerIsSetup} from '../utils/player/checkPlayerSetup';

export const usePlayer = (podcast: PodcastSeriesType | undefined) => {
  const [queue, setQueue] = useState<Track[]>();

  const addTrack = async (playlist: Track[]) => {
    await TrackPlayer.add(playlist);
  };

  const getQueue = async () => {
    try {
      const tracks = await TrackPlayer.getQueue();
      setQueue(tracks);
    } catch (e) {
      console.error('no queue', e);
    }
  };

  const setupPlayer = async (podcast: PodcastSeriesType) => {
    const isSetup = await checkPlayerIsSetup();
    console.log('isSetup', isSetup);
    if (isSetup) {
      try {
        await TrackPlayer.reset();
        await addTrack(formatPlaylist(podcast));
        await getQueue();
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
