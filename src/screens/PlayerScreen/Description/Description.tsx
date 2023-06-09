import {Pressable, View} from 'react-native';
import React from 'react';
import {styles} from './Description.styles';
import {Text} from '../../../components/Text';
import {Episode} from '../../../api/types';

type DescriptionProps = {
  description: Episode['summary'] | undefined;
};

export const Description = ({description}: DescriptionProps) => {
  return (
    <View>
      <Text type="H4" numberOfLines={2}>
        {description}
      </Text>
      <Pressable>
        <Text type="H4" style={{textDecorationLine: 'underline'}}>
          See More
        </Text>
      </Pressable>
    </View>
  );
};
