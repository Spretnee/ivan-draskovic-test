import {StyleSheet} from 'react-native';
import {FONT_BOLD, FONT_REGULAR, FONT_SEMI} from '../../constants/fonts';

const styles = StyleSheet.create({
  H1: {
    fontFamily: FONT_BOLD,
    fontSize: 30,
    lineHeight: 41,
  },
  H2: {
    fontFamily: FONT_REGULAR,
    fontSize: 24,
    lineHeight: 33,
  },
  H3: {
    fontFamily: FONT_BOLD,
    fontSize: 16,
    lineHeight: 20,
  },
  H4: {
    fontFamily: FONT_SEMI,
    fontSize: 14,
    lineHeight: 19,
  },
});

export default styles;
