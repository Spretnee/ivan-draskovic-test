import {useEffect} from 'react';
import TrackPlayer, {Track} from 'react-native-track-player';
import {PodcastSeriesType} from '../../../api/types';
import {formatPlaylist} from './formatPlaylist';

export const addPlaylist = (episodes: PodcastSeriesType | undefined) => {
  const addTrack = async (playlist: Track[]) => {
    await TrackPlayer.add(playlist);
  };

  useEffect(() => {
    if (episodes) {
      addTrack(formatPlaylist(episodes)).then(() =>
        console.log(formatPlaylist(episodes)),
      );
    }
  }, [episodes]);
};
