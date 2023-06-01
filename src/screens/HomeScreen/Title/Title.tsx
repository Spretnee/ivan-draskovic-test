import React from 'react';
import {Text} from '../../../components/Text';
import {View} from 'react-native';
import {MAGENTA, YELLOW, PURPLE} from '../../../constants/colors';
import styles from './Title.styles';

export const Title = () => {
  return (
    <View style={styles.title}>
      <Text type="H1" style={{color: 'black'}}>
        Aggregate & discover
        <Text type="H1" style={{color: MAGENTA}}>
          {' decentralized,'}
        </Text>
        <Text type="H1" style={{color: YELLOW}}>
          {' asynchronous,'}
        </Text>
        <Text type="H1" style={{color: PURPLE}}>
          {' high-volume'}
        </Text>
        {'  content.'}
      </Text>
    </View>
  );
};
