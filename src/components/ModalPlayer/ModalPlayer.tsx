import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {View, Text, StyleSheet, Button, BackHandler} from 'react-native';
import {BottomSheetModal} from '@gorhom/bottom-sheet';
import {BottomSheetPlayer} from '../BottomSheetPlayer/BottomSheetPlayer';
import {styles} from './ModalPlayer.styles';
import {MODAL_PLAYER_SNAP_POINTS} from './constants';
import {useHandlePresentModal} from './hooks/useHandlePresentModal';
import {handleNativeBackPress} from './utils/handleNativeBackPress';

// ref
export const ModalPlayer = () => {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const {handlePresentModalPress} = useHandlePresentModal(bottomSheetModalRef);

  const snapPoints = useMemo(() => MODAL_PLAYER_SNAP_POINTS, []);

  //player state
  return (
    <>
      <BottomSheetPlayer onPress={handlePresentModalPress} />
      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={0}
        handleIndicatorStyle={styles.indicator}
        snapPoints={snapPoints}>
        <View style={styles.contentContainer}>
          <Text>Awesome 🎉</Text>
        </View>
      </BottomSheetModal>
    </>
  );
};
