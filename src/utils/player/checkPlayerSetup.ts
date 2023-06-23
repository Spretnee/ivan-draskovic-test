import TrackPlayer, {
  AppKilledPlaybackBehavior,
  Capability,
} from 'react-native-track-player';
import {
  BACKWARD_JUMP_INTERVAL,
  FORWARD_JUMP_INTERVAL,
} from '../../constants/player';

export const checkPlayerIsSetup = async () => {
  let isSetup = false;
  try {
    await TrackPlayer.getCurrentTrack();
    isSetup = true;
  } catch (e) {
    await TrackPlayer.setupPlayer({
      minBuffer: 0,
      backBuffer: 30,
      playBuffer: 0,
    });
    isSetup = true;
    await TrackPlayer.updateOptions({
      android: {
        appKilledPlaybackBehavior: AppKilledPlaybackBehavior.PausePlayback,
      },

      stoppingAppPausesPlayback: true,
      forwardJumpInterval: FORWARD_JUMP_INTERVAL,
      backwardJumpInterval: BACKWARD_JUMP_INTERVAL,
      alwaysPauseOnInterruption: true,

      capabilities: [
        Capability.Pause,
        Capability.Play,
        Capability.Stop,
        Capability.JumpBackward,
        Capability.JumpForward,
        Capability.Stop,
        Capability.SkipToNext,
        Capability.SkipToPrevious,
      ],
      compactCapabilities: [
        Capability.Play,
        Capability.Pause,
        Capability.Stop,
        Capability.JumpBackward,
        Capability.JumpForward,
        Capability.Stop,
        Capability.SkipToNext,
        Capability.SkipToPrevious,
      ],
    });
  } finally {
    return isSetup;
  }
};
