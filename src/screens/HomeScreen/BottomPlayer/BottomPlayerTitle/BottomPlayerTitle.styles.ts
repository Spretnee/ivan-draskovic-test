import {StyleSheet} from 'react-native';
import {BLACK, FONT_LIGHT2} from '../../../../constants/colors';

export const styles = StyleSheet.create({
  podcastInfo: {flexDirection: 'row'},
  textPublicationUpperCase: {
    lineHeight: 14,
    color: FONT_LIGHT2,
    textTransform: 'uppercase',
  },
  textPublicationCapitalized: {
    lineHeight: 14,
    color: FONT_LIGHT2,
    textTransform: 'capitalize',
  },
  title: {lineHeight: 12, color: BLACK, textTransform: 'capitalize'},
});
