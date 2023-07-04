import TrackPlayer, {Track} from 'react-native-track-player';
import {Podcast, Queue} from '../api/types';
import {useEffect, useState} from 'react';
import {formatPlaylist} from '../utils/player/formatPlaylist';
import {checkPlayerIsSetup} from '../utils/player/checkPlayerSetup';
import {addTrack} from '../utils/player/addTrack';

export const useSetupPlayer = () => {
  const [isPlayerReady, setIsPlayerReady] = useState<boolean>(false);

  useEffect(() => {
    const setupPlayer = async () => {
      let isReady = await checkPlayerIsSetup();
      setIsPlayerReady(isReady);
    };

    setupPlayer();
  }, []);

  return {isPlayerReady};
};
