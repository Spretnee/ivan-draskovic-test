import {View} from 'react-native';
import React from 'react';
import {WHITE} from '../../../../constants/colors';
import {CROSS} from '../../../../assets/images/svg';
import {Text} from '../../../../components/Text';
import {SvgXml} from 'react-native-svg';
import {styles} from './SubscribeButton.style';

export const SubscribeButton = () => {
  return (
    <View style={styles.container}>
      <SvgXml style={styles.cross} xml={CROSS} />
      <Text type="H6" style={{color: WHITE}}>
        Subscribe
      </Text>
    </View>
  );
};
