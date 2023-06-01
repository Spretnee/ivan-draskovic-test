import {View} from 'react-native';
import styles from './HomeScreen.styles';
import {Title} from './Title';
import {MainButton} from './MainButton';
import Logo from './Logo/Logo';

export const HomeScreen = ({navigation}: any) => {
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
