export type BottomSheetPlayerProps = {
  onPress: () => void;
  isBuffering: boolean;
  isConnecting: boolean;
  isIdle: boolean;
  isPlaying: boolean;
  currentTrack: Track;
};
