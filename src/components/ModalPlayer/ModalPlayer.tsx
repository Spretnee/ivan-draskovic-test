import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  BackHandler,
  ButtonProps,
  ViewStyle,
  SafeAreaView,
} from 'react-native';
import {BottomSheetModal} from '@gorhom/bottom-sheet';
import {BottomSheetPlayer} from '../BottomSheetPlayer/BottomSheetPlayer';
import {styles} from './ModalPlayer.styles';
import {MODAL_PLAYER_SNAP_POINTS} from './constants';
import {useHandlePresentModal} from './hooks/useHandlePresentModal';
import {handleNativeBackPress} from './utils/handleNativeBackPress';
import {SvgXml} from 'react-native-svg';
import {CHEVRON_DOWN} from '../../assets/images/svg';
import {BottomTabBarButtonProps} from '@react-navigation/bottom-tabs';
import {usePlayerContext} from '../../providers/PlayerProvider';
import PlayerScreen from '../../screens/PlayerScreen/PlayerScreen';
import {Header} from 'react-native/Libraries/NewAppScreen';
import {BottomBar} from '../../screens/PlayerScreen/BottomBar';
import {Description} from '../../screens/PlayerScreen/Description/Description';
import {EpisodeTitle} from '../../screens/PlayerScreen/EpisodeTitle';
import {TranscriptionButton} from '../../screens/PlayerScreen/TranscriptionButton';
import {Slider} from '../../screens/PlayerScreen/Slider';

// ref
export const ModalPlayer = () => {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const {
    isPlaying,
    isIdle,
    currentTrack,
    isBuffering,
    isConnecting,
    controls,
    progressBarDuration,
    progressBarPosition,
  } = usePlayerContext();

  const {dismissModal, handlePresentModalPress} =
    useHandlePresentModal(bottomSheetModalRef);

  const snapPoints = useMemo(() => MODAL_PLAYER_SNAP_POINTS, []);

  const DismissChevron = ({
    onPress,
    style,
  }: {
    onPress: () => void;
    style?: ViewStyle;
  }) => <SvgXml onPress={onPress} xml={CHEVRON_DOWN} style={{...style}} />;

  return (
    <>
      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={0}
        enablePanDownToClose={false}
        handleIndicatorStyle={styles.defaultIndicator}
        snapPoints={snapPoints}>
        <SafeAreaView style={{flex: 1}}>
          <Header />
          <View
            style={{
              paddingVertical: 32,
              paddingHorizontal: 21,
            }}>
            {/* <Image url={currentTrack?.artwork} /> */}
            <EpisodeTitle title={currentTrack.title} />
            <Slider
              controls={controls}
              duration={progressBarDuration}
              position={progressBarPosition}
              isPlaying={isPlaying}
            />
            <TranscriptionButton />
            <Description description={currentTrack.description} />
          </View>
          <BottomBar />
        </SafeAreaView>
      </BottomSheetModal>
      <BottomSheetPlayer
        onPress={handlePresentModalPress}
        isConnecting
        isBuffering
        isIdle
        isPlaying
        currentTrack={currentTrack}
      />
    </>
  );
};
