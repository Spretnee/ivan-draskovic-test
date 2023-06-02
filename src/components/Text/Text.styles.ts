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
  H3_BOLD: {
    fontFamily: FONT_BOLD,
    fontSize: 16,
    lineHeight: 24,
  },
  H4: {
    fontFamily: FONT_SEMI,
    fontSize: 14,
    lineHeight: 19,
  },

  H5: {
    fontFamily: FONT_SEMI,
    fontSize: 10,
    lineHeight: 19,
  },
  H6: {
    fontFamily: FONT_BOLD,
    fontSize: 12,
    lineHeight: 16,
  },
});

export default styles;
