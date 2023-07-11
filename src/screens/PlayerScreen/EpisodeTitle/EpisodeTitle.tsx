import { View } from 'react-native';
import React from 'react';
import { styles } from './EpisodeTitle.styles';
import { Text } from '../../../components/Text';

type EpisodeTitleProps = { title: string | undefined };

export const EpisodeTitle = ({ title }: EpisodeTitleProps) => {
  return (
    <View style={styles.container}>
      <Text type="H2" style={styles.text}>
        {title}
      </Text>
    </View>
  );
};
