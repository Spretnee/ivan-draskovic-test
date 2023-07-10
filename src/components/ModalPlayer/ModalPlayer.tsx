import React, { useMemo, useRef } from 'react';
import { View, SafeAreaView, Dimensions } from 'react-native';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { BottomSheetPlayer } from '../BottomSheetPlayer/BottomSheetPlayer';
import { styles } from './ModalPlayer.styles';
import { MODAL_PLAYER_SNAP_POINTS } from './constants';
import { useHandlePresentModal } from './hooks/useHandlePresentModal';
import { usePlayerContext } from '../../providers/PlayerProvider';
import { BottomBar } from '../../screens/PlayerScreen/BottomBar';
import { Description } from '../../screens/PlayerScreen/Description/Description';
import { EpisodeTitle } from '../../screens/PlayerScreen/EpisodeTitle';
import Slider from '../../screens/PlayerScreen/Slider/Slider';
import { BACKGROUND } from '../../constants/colors';
import { Image } from '../../screens/PlayerScreen/Image/Image';

import { DismissChevron } from './DismissChevron';
import { useCustomPlaybackState } from '../../hooks/useCustomPlaybackState';

const { height } = Dimensions.get('screen');
export const ModalPlayer = () => {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const { currentTrack, controls } = usePlayerContext();
  const { handlePresentModalPress, dismissModal } =
    useHandlePresentModal(bottomSheetModalRef);

  const snapPoints = useMemo(() => MODAL_PLAYER_SNAP_POINTS, []);

  const state = useCustomPlaybackState();
  return (
    <>
      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={0}
        enablePanDownToClose={false}
        handleIndicatorStyle={styles.defaultIndicator}
        snapPoints={snapPoints}
        style={{
          marginTop: -20,
        }}
      >
        <SafeAreaView
          style={{ height: height - 77, backgroundColor: BACKGROUND }}
        >
          <DismissChevron
            onPress={dismissModal}
            containerStyle={{ width: 50, height: 50 }}
          />
          <View
            style={{
              paddingVertical: 32,
              paddingHorizontal: 21,
            }}
          >
            <Image
              url={currentTrack.artwork}
              style={{ marginBottom: 40, width: 220, height: 220 }}
            />
            <EpisodeTitle title={currentTrack.title} />
            <Slider isPlaying={state.isPlaying} controls={controls} />
            <Description description={currentTrack.description} />
          </View>
          <BottomBar />
        </SafeAreaView>
      </BottomSheetModal>
      <BottomSheetPlayer
        controls={controls}
        onPress={handlePresentModalPress}
        state={state}
        currentTrack={currentTrack}
      />
    </>
  );
};
