import TrackPlayer, {
  AppKilledPlaybackBehavior,
  Capability,
  Track,
} from 'react-native-track-player';
import {PodcastSeriesType} from '../../api/types';
import {useEffect, useState} from 'react';
import {formatPlaylist} from '../../screens/PlayerScreen/utils/formatPlaylist';
import {useGetPodcast} from '../../hooks/useGetPodcast';
import {getPodcast} from '../../api/podcasts';

export const usePlayer = (podcast: PodcastSeriesType | undefined) => {
  const [queue, setQueue] = useState<Track[]>();
  const checkPlayerIsSetup = async () => {
    let isSetup = false;
    try {
      await TrackPlayer.getCurrentTrack();
      isSetup = true;
    } catch (e) {
      await TrackPlayer.setupPlayer();
      isSetup = true;
      await TrackPlayer.updateOptions({
        android: {
          appKilledPlaybackBehavior: AppKilledPlaybackBehavior.ContinuePlayback,
        },
        stoppingAppPausesPlayback: true,
        forwardJumpInterval: 30,
        backwardJumpInterval: 15,

        capabilities: [
          Capability.Pause,
          Capability.Play,
          Capability.Stop,
          Capability.JumpBackward,
          Capability.JumpForward,
          Capability.Stop,
          Capability.SkipToNext,
          Capability.SkipToPrevious,
        ],
        compactCapabilities: [
          Capability.Play,
          Capability.Pause,
          Capability.Stop,
          Capability.JumpBackward,
          Capability.JumpForward,
          Capability.Stop,
          Capability.SkipToNext,
          Capability.SkipToPrevious,
        ],
      });
    } finally {
      return isSetup;
    }
  };

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
