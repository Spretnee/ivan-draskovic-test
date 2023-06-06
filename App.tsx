import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {RootNavigator} from './src/navigation/RootNavigator';
import TrackPlayer, {
  AppKilledPlaybackBehavior,
  Capability,
} from 'react-native-track-player';
import {PLAYLIST_DATA} from './src/constants';
import {useEffect} from 'react';
import {PlayerStateProvider} from './src/providers/PlayerStateProvider';

const queryClient = new QueryClient();
const options = {};

const setupTrackPlayer = async () => {
  try {
    await TrackPlayer.setupPlayer();
    await TrackPlayer.updateOptions({
      android: {
        appKilledPlaybackBehavior: AppKilledPlaybackBehavior.ContinuePlayback,
      },
      capabilities: [
        Capability.Pause,
        Capability.Play,
        Capability.Stop,
        Capability.JumpBackward,
        Capability.JumpForward,
      ],
      compactCapabilities: [
        Capability.Play,
        Capability.Pause,
        Capability.Stop,
        Capability.JumpBackward,
        Capability.JumpForward,
      ],
    });
  } catch (e) {
    console.error('Track player setup error', e);
  }
};

const App = () => {
  useEffect(() => {
    setupTrackPlayer();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <PlayerStateProvider>
        <RootNavigator />
      </PlayerStateProvider>
    </QueryClientProvider>
  );
};

export default App;
