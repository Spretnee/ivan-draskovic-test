import {View} from 'react-native';
import React from 'react';
import {styles} from './BottomPlayerTitle.styles';
import {Text} from '../../../../components/Text';
import {BottomPlayerTitleProps} from './types';

export const BottomPlayerTitle = ({data}: BottomPlayerTitleProps) => {
  return (
    <View>
      <View style={styles.podcastInfo}>
        <Text type={'H5'} style={styles.textPublicationUpperCase}>
          {`puck : `}
        </Text>
        <Text type={'H5'} style={styles.textPublicationCapitalized}>
          {data?.author}
        </Text>
      </View>
      <Text type={'H7'} style={styles.title}>
        {data?.title}
      </Text>
    </View>
  );
};
