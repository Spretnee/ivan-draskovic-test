import {StyleProp, ViewStyle, View} from 'react-native';
import {SvgXml} from 'react-native-svg';
import {CHEVRON_DOWN} from '../../assets/images/svg';

export const DismissChevron = ({
  onPress,
  style,
  containerStyle,
}: {
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
}) => (
  <View
    style={[
      {width: 40, height: 40, justifyContent: 'center', alignItems: 'center'},
      containerStyle,
    ]}
  >
    <SvgXml onPress={onPress} xml={CHEVRON_DOWN} style={style} />
  </View>
);
