import {View} from 'react-native';
import styles from './HomeScreen.styles';
import {Title} from './Title';
import {MainButton} from './MainButton';
import Logo from './Logo/Logo';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList, ScreenPropsHome} from '../../navigation/types';

export const HomeScreen = ({navigation}: ScreenPropsHome) => {
  return (
    <View style={styles.title}>
      <Title />
      <View style={styles.bottomSection}>
        <Logo />
        <MainButton navigation={navigation} />
      </View>
    </View>
  );
};
