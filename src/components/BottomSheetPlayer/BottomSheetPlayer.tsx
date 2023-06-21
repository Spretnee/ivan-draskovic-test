import {Pressable, TouchableOpacity} from 'react-native';
import React, {useCallback, useMemo, useRef} from 'react';
import BottomSheet from '@gorhom/bottom-sheet';
import {BottomSheetPlayerProps} from './types';
import {styles} from './BottomSheetPlayer.styles';
import {PlayPause} from '../PlayPause';
import {snapPoints} from './utils/snapPoints';
import {Title} from './Title';
import {usePlayerContext} from '../../providers/PlayerProvider';
import {Image} from '../../screens/PlayerScreen/Image/Image';

export const BottomSheetPlayer = ({onPress}: BottomSheetPlayerProps) => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const {isPlaying, isIdle, currentTrack, isBuffering, isConnecting} =
    usePlayerContext();
  const isLoading = isBuffering || isConnecting;

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={!isIdle || isLoading ? 0 : -1}
      bottomInset={60}
      detached={true}
      backgroundStyle={styles.backgroundStyle}
      handleIndicatorStyle={{display: 'none'}}
      snapPoints={snapPoints}
      containerStyle={styles.contentContainer}
      style={styles.sheetContainer}>
      <Pressable onPress={onPress} style={styles.pressableStyle}>
        <Image url={currentTrack.artwork} style={styles.image} />
        <Title title={currentTrack.title} author={currentTrack.artist} />
        <PlayPause type="large" isPlaying={isPlaying} />
      </Pressable>
    </BottomSheet>
  );
};
