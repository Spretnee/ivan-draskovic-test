import React, {useMemo, useRef} from 'react';
import {View, SafeAreaView, Dimensions} from 'react-native';
import {BottomSheetModal} from '@gorhom/bottom-sheet';
import {BottomSheetPlayer} from '../BottomSheetPlayer/BottomSheetPlayer';
import {styles} from './ModalPlayer.styles';
import {MODAL_PLAYER_SNAP_POINTS} from './constants';
import {useHandlePresentModal} from './hooks/useHandlePresentModal';
import {usePlayerContext} from '../../providers/PlayerProvider';
import {Header} from 'react-native/Libraries/NewAppScreen';
import {BottomBar} from '../../screens/PlayerScreen/BottomBar';
import {Description} from '../../screens/PlayerScreen/Description/Description';
import {EpisodeTitle} from '../../screens/PlayerScreen/EpisodeTitle';
import {Slider} from '../../screens/PlayerScreen/Slider';
import {BACKGROUND} from '../../constants/colors';
import {Image} from '../../screens/PlayerScreen/Image/Image';
import {State, usePlaybackState, useProgress} from 'react-native-track-player';
import {useControls} from '../../hooks/useControls';
import {DismissChevron} from './DismissChevron';
import {Podcast} from '../../api/types';
import {usePlayer} from '../../hooks/usePlayer';

const {height} = Dimensions.get('screen');
export const ModalPlayer = () => {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const controls = useControls();
  const {currentTrack} = usePlayerContext();
  const playbackState = usePlaybackState();
  const {handlePresentModalPress, dismissModal} =
    useHandlePresentModal(bottomSheetModalRef);

  const snapPoints = useMemo(() => MODAL_PLAYER_SNAP_POINTS, []);
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
          style={{height: height - 77, backgroundColor: BACKGROUND}}
        >
          <DismissChevron
            onPress={dismissModal}
            containerStyle={{width: 50, height: 50}}
          />
          <View
            style={{
              paddingVertical: 32,
              paddingHorizontal: 21,
            }}
          >
            <Image
              url={currentTrack.artwork}
              style={{marginBottom: 40, width: 220, height: 220}}
            />
            <EpisodeTitle title={currentTrack.title} />
            <Slider
              controls={controls}
              duration={controls.duration}
              position={controls.position}
              isPlaying={playbackState === State.Playing}
            />
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
        isPlaying={playbackState === State.Playing}
        currentTrack={currentTrack}
      />
    </>
  );
};
