import {StyleSheet} from 'react-native';
import {BEIGE} from '../../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    borderTopColor: BEIGE,
    borderTopWidth: 2,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
});
