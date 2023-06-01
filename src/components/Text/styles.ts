import {StyleSheet} from 'react-native';
import {FONT_BOLD, FONT_REGULAR, FONT_SEMI} from '../../constants/fonts';
import {BLACK} from '../../constants/colors';

const styles = StyleSheet.create({
  default: {color: BLACK},
  H1: {
    fontFamily: FONT_BOLD,
    fontSize: 48,
    lineHeight: 56,
  },
  H2: {
    fontFamily: FONT_BOLD,
    fontSize: 23,
    lineHeight: 24,
  },
  H3: {
    fontFamily: FONT_REGULAR,
    fontSize: 16,
    lineHeight: 24,
  },
  H4: {
    fontFamily: FONT_SEMI,
    fontSize: 14,
    lineHeight: 19,
  },
});

export default styles;
