import {View} from 'react-native';
import React from 'react';
import {SvgXml} from 'react-native-svg';
import {HEADPHONES} from '../../../../assets/images/svg';
import {Text} from '../../../../components/Text';
import {styles} from './EpisodePreview.styles';

export const EpisodePreview = () => (
  <View style={styles.container}>
    <View style={styles.title}>
      <SvgXml style={styles.headphones} xml={HEADPHONES} />
      <Text type="H5">AN EPISODE FROM</Text>
    </View>
    <Text type="H4">The Power That Be</Text>
  </View>
);
