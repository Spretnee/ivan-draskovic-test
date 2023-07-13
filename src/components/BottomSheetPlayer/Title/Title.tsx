import { View } from 'react-native';
import React from 'react';
import { styles } from './Title.styles';
import { Text } from '../../Text';
import { TitleProps } from './types';

export const Title = ({ title, author }: TitleProps) => {
  return (
    <View>
      <View style={styles.podcastInfo}>
        <Text type={'H3'} style={styles.textPublicationCapitalized}>
          {author}
        </Text>
      </View>
      <View style={{ width: '80%', paddingHorizontal: 4 }}>
        <Text type={'H4'} style={styles.title} numberOfLines={1}>
          {title}
        </Text>
      </View>
    </View>
  );
};
