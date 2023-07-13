import { Pressable, View } from 'react-native';
import styles from './HomeScreen.styles';
import { FlatList } from 'react-native-gesture-handler';
import { Text } from '../../components/Text/Text';
import { GREEN } from '../../constants/colors';
import { CATEGORIES } from '../../constants/podchaserApi';
import { Title } from '../../components/Title';

export const HomeScreen = () => {
  return (
    <View style={styles.title}>
      <Title />
    </View>
  );
};
