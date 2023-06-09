import {Pressable} from 'react-native';
import {SvgXml} from 'react-native-svg';
import {CHEVRON_RIGHT} from '../../../assets/images/svg';
import {styles} from './MainButton.style';
import {EPISODE_ID} from '../../../api/constants';

export const MainButton = ({navigation}: any) => {
  return (
    <Pressable
      onPress={() => {
        navigation.navigate('PodcastPreview');
      }}
      style={styles.mainButton}>
      <SvgXml xml={CHEVRON_RIGHT} />
    </Pressable>
  );
};

MainButton;
