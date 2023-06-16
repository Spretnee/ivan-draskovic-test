import {Text, View} from 'react-native';
import styles from './HomeScreen.styles';
import {Title} from './Title';
import {MainButton} from './MainButton';
import Logo from './Logo/Logo';
import {ScreenPropsHome} from '../../navigation/types';
// import {BottomPlayer} from './BottomPlayer/BottomPlayer';
import {SearchBar} from '../../components/SearchBar/SearchBar';
import {FieldValues} from 'react-hook-form';
// import {search} from '../../api/podcasts';
// import {useSearch} from '../../hooks/useSearch';

export const HomeScreen = ({navigation, route}: ScreenPropsHome) => {
  // const handleSearch = async (searchText: FieldValues) => {
  //   search(searchText.searchText);
  // };

  return (
    <View style={styles.title}>
      <Title />

      {/* <SearchBar onSearch={handleSearch} /> */}
      <View style={styles.bottomSection}>
        <Logo />
        <MainButton navigation={navigation} />
      </View>
      {/* <BottomPlayer /> */}
    </View>
  );
};
