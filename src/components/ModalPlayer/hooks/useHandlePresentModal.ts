import {BottomSheetModalMethods} from '@gorhom/bottom-sheet/lib/typescript/types';
import React, {useCallback, useEffect, useState} from 'react';
import {BackHandler} from 'react-native';
import {handleNativeBackPress} from '../utils/handleNativeBackPress';

export const useHandlePresentModal = (
  ref: React.RefObject<BottomSheetModalMethods>,
) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePresentModalPress = useCallback(() => {
    presentModal();
  }, []);

  const presentModal = () => {
    setIsModalOpen(true);
    ref.current?.present();
  };

  const dismissModal = () => {
    setIsModalOpen(false);
    ref.current?.dismiss();
  };
  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', () =>
      handleNativeBackPress(isModalOpen, dismissModal),
    );

    return () => {
      backHandler.remove();
    };
  }, [isModalOpen]);

  return {handlePresentModalPress, dismissModal};
};
