export type ChildrenType = {
  children: React.ReactNode;
};

export type PlayerStateContextType = {
  isPlaying: boolean;
  isReady: boolean;
  isPaused: boolean;
  isIdle: boolean;
  isBuffering: boolean;
  isConnecting: boolean;

  progressBarBuffered: number;
  progressBarPosition: number;
  progressBarDuration: number;
};
