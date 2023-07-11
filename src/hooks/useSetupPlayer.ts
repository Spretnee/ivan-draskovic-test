import { useEffect, useState } from 'react';
import { checkPlayerIsSetup } from '../utils/player/checkPlayerSetup';

export const useSetupPlayer = () => {
  const [isPlayerReady, setIsPlayerReady] = useState<boolean>(false);

  useEffect(() => {
    const setupPlayer = async () => {
      let isReady = await checkPlayerIsSetup();
      setIsPlayerReady(isReady);
    };

    setupPlayer();
  }, []);

  return { isPlayerReady };
};
