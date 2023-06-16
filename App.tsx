import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {RootNavigator} from './src/navigation/RootNavigator';
import TrackPlayer, {
  AppKilledPlaybackBehavior,
  Capability,
} from 'react-native-track-player';
import {useEffect} from 'react';
import {PlayerStateProvider} from './src/providers/PlayerProvider';

const queryClient = new QueryClient();
const options = {};

// const setupTrackPlayer = async () => {
//   try {
//     await TrackPlayer.setupPlayer();
//     await TrackPlayer.updateOptions({
//       android: {
//         appKilledPlaybackBehavior: AppKilledPlaybackBehavior.ContinuePlayback,
//       },
//       capabilities: [
//         Capability.Pause,
//         Capability.Play,
//         Capability.Stop,
//         Capability.JumpBackward,
//         Capability.JumpForward,
//         Capability.Stop,
//         Capability.SkipToNext,
//         Capability.SkipToPrevious,
//       ],
//       compactCapabilities: [
//         Capability.Play,
//         Capability.Pause,
//         Capability.Stop,
//         Capability.JumpBackward,
//         Capability.JumpForward,
//         Capability.Stop,
//         Capability.SkipToNext,
//         Capability.SkipToPrevious,
//       ],
//     });
//   } catch (e) {
//     console.error('Track player setup error', e);
//   }
// };

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RootNavigator />
    </QueryClientProvider>
  );
};

export default App;
