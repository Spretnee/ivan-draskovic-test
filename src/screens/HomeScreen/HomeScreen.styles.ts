import {StyleSheet} from 'react-native';
import {BACKGROUND} from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: BACKGROUND,
  },
  title: {flex: 1},
  bottomSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
  },
});

export default styles;
