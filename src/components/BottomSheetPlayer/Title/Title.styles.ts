import { StyleSheet } from 'react-native';
import { BLACK, FONT_LIGHT2 } from '../../../constants/colors';

export const styles = StyleSheet.create({
  podcastInfo: { flexDirection: 'row', paddingHorizontal: 4, width: '80%' },
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
  title: { color: BLACK, textTransform: 'capitalize' },
});
