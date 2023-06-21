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
  Dimensions,
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
import {BACKGROUND} from '../../constants/colors';
import {Image} from '../../screens/PlayerScreen/Image/Image';
const {height} = Dimensions.get('screen');

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

  const {handlePresentModalPress} = useHandlePresentModal(bottomSheetModalRef);

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
        snapPoints={snapPoints}
        style={{
          marginTop: -20,
        }}>
        <SafeAreaView
          style={{height: height - 77, backgroundColor: BACKGROUND}}>
          <View
            style={{
              paddingVertical: 32,
              paddingHorizontal: 21,
            }}>
            <Image
              url={currentTrack.artwork}
              style={{marginBottom: 40, width: 220, height: 220}}
            />
            <EpisodeTitle title={currentTrack.title} />
            <Slider
              controls={controls}
              duration={progressBarDuration}
              position={progressBarPosition}
              isPlaying={isPlaying}
            />
            {/* <TranscriptionButton /> */}
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
