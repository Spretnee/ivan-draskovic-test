import React, {useEffect} from 'react';
import TrackPlayer, {Track} from 'react-native-track-player';
import {GetPodcastEpisode} from '../../../api/episodes';
import {Episode, GetPodcastSeries} from '../../../api/types';

export const addPlaylist = (episodes: GetPodcastSeries | undefined) => {
  const addTrack = async (playlist: Track[]) => {
    await TrackPlayer.add(playlist);
  };

  const formatPlaylist = ({episodes}: GetPodcastSeries): Track[] =>
    episodes.map((episode: Episode) => ({
      url: episode?.audioUrl ? episode.audioUrl : '',
      title: episode?.name,
      artist: episode?.podcastSeries,
      date: episode?.datePublished.toString(),
      artwork: episode?.imageUrl,
    }));

  useEffect(() => {
    if (episodes) {
      addTrack(formatPlaylist(episodes));
    }
  });
};

// {
//       url: episode?.audioUrl ? episode.audioUrl : '',
//       title: episode?.name,
//       artist: episode?.podcastSeries,
//       date: episode?.datePublished,
//       artwork: episode?.imageUrl,
//     },
