import { Pressable, TouchableOpacity } from 'react-native';
import React, { useCallback, useMemo, useRef } from 'react';
import BottomSheet, { BottomSheetModal } from '@gorhom/bottom-sheet';
import { BottomSheetPlayerProps } from './types';
import { styles } from './BottomSheetPlayer.styles';
import { PlayPause } from '../PlayPause';
import { snapPoints } from './utils/snapPoints';
import { Title } from './Title';
import { Image } from '../../screens/PlayerScreen/Image/Image';

export const BottomSheetPlayer = ({
  onPress,
  state,
  controls,
  currentTrack,
}: BottomSheetPlayerProps) => {
  const bottomSheetRef = useRef<BottomSheet>(null);

  const { isIdle, isReady, isLoading, isPlaying, isPaused } = state;

  if (
    (!isIdle && !isReady && !isPlaying && !isPaused) ||
    currentTrack.id === ''
  ) {
    bottomSheetRef.current?.close();
  } else {
    bottomSheetRef.current?.snapToIndex(0);
  }

  return (
    <BottomSheet
      ref={bottomSheetRef}
      bottomInset={60}
      detached={true}
      backgroundStyle={styles.backgroundStyle}
      handleIndicatorStyle={{ display: 'none' }}
      snapPoints={snapPoints}
      containerStyle={styles.contentContainer}
      style={styles.sheetContainer}
    >
      <Pressable onPress={onPress} style={styles.pressableStyle}>
        <Image url={currentTrack.artwork} style={styles.image} />
        <Title title={currentTrack.title} author={currentTrack.artist} />
        <PlayPause isPlaying={isPlaying} controls={controls} />
      </Pressable>
    </BottomSheet>
  );
};
