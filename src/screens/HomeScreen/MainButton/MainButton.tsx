import {Pressable} from 'react-native';
import {SvgXml} from 'react-native-svg';
import {CHEVRON_RIGHT} from '../../../assets/images/svg';
import {styles} from './MainButton.style';
import {useGetEpisode} from '../../../api/hooks/useGetEpisode';
import {EPISODE_ID} from '../../../api/constants';

export const MainButton = ({navigation}: any) => {
  return (
    <Pressable
      onPress={() => {
        navigation.navigate('Player');
      }}
      style={styles.mainButton}>
      <SvgXml xml={CHEVRON_RIGHT} />
    </Pressable>
  );
};

MainButton;
