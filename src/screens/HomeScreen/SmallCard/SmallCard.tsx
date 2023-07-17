import { StyleProp, View, ViewStyle } from 'react-native';
import React from 'react';
import { Image } from '../../PlayerScreen/Image/Image';
import { BEIGE, GREEN_LIGHT, WHITE } from '../../../constants/colors';
import { Text } from '../../../components/Text/Text';

export const SmallCard = ({
  image,
  title,
  style,
}: {
  image: string;
  title: string;
  style?: StyleProp<ViewStyle>;
}) => {
  return (
    <View
      style={[{ flexDirection: 'row', backgroundColor: GREEN_LIGHT }, style]}
    >
      <Image
        url={image}
        style={{
          width: 65,
          height: 65,
          borderBottomLeftRadius: 8,
          borderTopLeftRadius: 8,
        }}
      />
      <Text
        numberOfLines={2}
        style={{ alignSelf: 'center', padding: 8, flex: 1 }}
        type={'H3'}
      >
        {title}
      </Text>
    </View>
  );
};
