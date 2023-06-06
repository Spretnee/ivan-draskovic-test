import React, {useEffect} from 'react';
import TrackPlayer, {Track} from 'react-native-track-player';
import {Episode} from '../../../api/types';

export const addPlaylist = (episode: Episode) => {
  const addTrack = async (playlist: Track[]) => {
    await TrackPlayer.add(playlist);
  };

  const formatPlaylist = (episode: Episode): Track[] => [
    {
      url: episode.mp3_url,
      title: episode.title,
      artist: episode.author,
      date: episode.publication_date,
      artwork: episode.image,
    },
  ];
  useEffect(() => {
    addTrack(formatPlaylist(episode));
  }, []);
};
