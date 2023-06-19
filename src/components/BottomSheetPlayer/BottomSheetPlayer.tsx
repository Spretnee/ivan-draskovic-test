import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useCallback, useMemo, useRef} from 'react';
import BottomSheet from '@gorhom/bottom-sheet';
import {BOTTOM_SHEET_PLAYER_SNAP_POINTS} from './constats';
import {BottomSheetPlayerProps} from './types';
import {styles} from './BottomSheetPlayer.styles';

export const BottomSheetPlayer = ({onPress}: BottomSheetPlayerProps) => {
  const bottomSheetRef = useRef<BottomSheet>(null);

  const snapPoints = useMemo(() => BOTTOM_SHEET_PLAYER_SNAP_POINTS, []);

  const handleSheetChanges = useCallback((index: number) => {}, []);

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={0}
      bottomInset={60}
      detached={true}
      handleIndicatorStyle={{display: 'none'}}
      snapPoints={snapPoints}
      style={styles.sheetContainer}
      onChange={handleSheetChanges}>
      <TouchableOpacity onPress={onPress} style={styles.contentContainer}>
        <Text style={{color: 'black'}}>BottomSheetPlayer</Text>
      </TouchableOpacity>
    </BottomSheet>
  );
};
