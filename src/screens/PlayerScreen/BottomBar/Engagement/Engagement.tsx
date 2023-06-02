import {View} from 'react-native';
import React from 'react';
import {styles} from './Engagement.styles';
import {Text} from '../../../../components/Text';
import {SvgXml} from 'react-native-svg';
import {HEART, COMMENTS, EYE} from '../../../../assets/images/svg';

export const Engagement = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        width: 133,
        paddingLeft: 7,
        justifyContent: 'space-between',
      }}>
      <View style={styles.engagement}>
        <SvgXml xml={HEART} style={styles.svg} />
        <Text type="H3" style={styles.text}>
          3
        </Text>
      </View>
      <View style={styles.engagement}>
        <SvgXml xml={COMMENTS} style={styles.svg} />
        <Text type="H3" style={styles.text}>
          10
        </Text>
      </View>
      <View style={styles.engagement}>
        <SvgXml xml={EYE} style={styles.svg} />
        <Text type="H3" style={styles.text}>
          10
        </Text>
      </View>
    </View>
  );
};
