import {View} from 'react-native';
import styles from './HomeScreen.styles';
import {Title} from './Title';
import {MainButton} from './MainButton';
import Logo from './Logo/Logo';
import {ScreenPropsHome} from '../../navigation/types';

import {BottomPlayer} from './BottomPlayer/BottomPlayer';
import {useGetEpisode} from '../../api/hooks/useGetEpisode';
import {getEpisode} from '../../api/getEpisode';

export const HomeScreen = ({navigation, route}: ScreenPropsHome) => {
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
