import {View} from 'react-native';
import styles from './HomeScreen.styles';
import {Title} from './Title';
import {MainButton} from './MainButton';
import Logo from './Logo/Logo';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList, ScreenPropsHome} from '../../navigation/types';
import {Text} from '../../components/Text';
import {BLACK, FONT_LIGHT2} from '../../constants/colors';
import {Slider} from '../PlayerScreen/Slider';
import {SliderMinimized} from './SliderMinimized';
import {SvgXml} from 'react-native-svg';
import {CLOSE, PAUSE_SMALL, PLAY_SMALL} from '../../assets/images/svg';
import {BottomPlayer} from './BottomPlayer/BottomPlayer';

export const HomeScreen = ({navigation}: ScreenPropsHome) => {
  return (
    <View style={styles.title}>
      <Title />
      <View style={styles.bottomSection}>
        <Logo />
        <MainButton navigation={navigation} />
      </View>
      <BottomPlayer />
    </View>
  );
};
