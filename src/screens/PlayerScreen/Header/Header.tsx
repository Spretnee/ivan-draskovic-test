import {View} from 'react-native';
import React from 'react';
import {SvgXml} from 'react-native-svg';
import {CROSS, HEADPHONES} from '../../../assets/images/svg';
import {Text} from '../../../components/Text';
import {GREEN, WHITE} from '../../../constants/colors';
import {BackButton} from './BackButton';
import {EpisodePreview} from './EpisodePreview';
import {SubscribeButton} from './SubscribeButton';
import {styles} from './Header.styles';

export const Header = () => {
  return (
    <View style={styles.container}>
      <BackButton />
      <EpisodePreview />
      <SubscribeButton />
    </View>
  );
};
