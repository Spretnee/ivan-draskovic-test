import {Pressable} from 'react-native';
import {SvgXml} from 'react-native-svg';
import {CHEVRON_RIGHT} from '../../../assets/images/svg';
import {WHITE} from '../../../constants/colors';

export const MainButton = ({navigation}: any) => {
  return (
    <Pressable
      onPress={() => {
        navigation.navigate('Player');
      }}
      style={{
        backgroundColor: WHITE,
        paddingHorizontal: 16,
        paddingVertical: 12,
        width: 56,
        height: 48,
        borderRadius: 2,
        alignSelf: 'flex-end',
      }}>
      <SvgXml xml={CHEVRON_RIGHT} />
    </Pressable>
  );
};

MainButton;
