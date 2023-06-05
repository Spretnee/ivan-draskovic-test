import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {RootNavigator} from './src/navigation/RootNavigator';
import TrackPlayer, {
  AppKilledPlaybackBehavior,
  Capability,
} from 'react-native-track-player';
import {PLAYLIST_DATA} from './src/constants';
import {useEffect} from 'react';

const queryClient = new QueryClient();

const setupTrackPlayer = async () => {
  try {
    await TrackPlayer.setupPlayer();
    await TrackPlayer.updateOptions({
      android: {
        appKilledPlaybackBehavior: AppKilledPlaybackBehavior.ContinuePlayback,
      },
      capabilities: [Capability.Pause, Capability.Play],
      compactCapabilities: [Capability.Play, Capability.Pause],
    });

    await TrackPlayer.add(PLAYLIST_DATA);
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
      <RootNavigator />
    </QueryClientProvider>
  );
};

export default App;
