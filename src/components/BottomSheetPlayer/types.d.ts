import { PlayerState } from '../../hooks/types';

export type BottomSheetPlayerProps = {
  onPress: () => void;
  state: PlayerState;
  currentTrack: Track;
  controls: Controls;
};
