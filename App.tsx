import 'react-native-gesture-handler';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {RootNavigator} from './src/navigation/RootNavigator';

import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {BottomSheetProvider} from './src/providers/BottomSheetProvider';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';

const queryClient = new QueryClient();

const App = () => {
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{flex: 1}}>
        <BottomSheetModalProvider>
          <QueryClientProvider client={queryClient}>
            <BottomSheetProvider>
              <RootNavigator />
            </BottomSheetProvider>
          </QueryClientProvider>
        </BottomSheetModalProvider>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
};

export default App;
