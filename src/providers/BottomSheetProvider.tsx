import BottomSheet, {
  BottomSheetModalProvider,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import {
  PropsWithChildren,
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const BottomSheetContext = createContext({});

const BottomSheetProvider: React.FC<PropsWithChildren> = ({children}) => {
  const bottomSheetRef = useRef<BottomSheet>(null);

  // variables
  const snapPoints = useMemo(() => ['10%'], []);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);
  return (
    <BottomSheetContext.Provider value={{}}>
      <BottomSheetModalProvider>{children}</BottomSheetModalProvider>
    </BottomSheetContext.Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: 'grey',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
  sheetContainer: {
    marginHorizontal: 8,
    height: 80,
    position: 'absolute',
  },
});

const useAppBottomSheet = () => useContext(BottomSheetContext);

export {BottomSheetProvider, useAppBottomSheet};
