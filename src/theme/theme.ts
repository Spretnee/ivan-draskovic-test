import {DefaultTheme} from '@react-navigation/native';
import {BACKGROUND} from '../constants/colors';

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: BACKGROUND,
  },
};
