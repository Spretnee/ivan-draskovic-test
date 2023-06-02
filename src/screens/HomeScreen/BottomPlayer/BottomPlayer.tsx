import {View} from 'react-native';
import {styles} from './BottomPlayer.styles';
import {Text} from '../../../components/Text';
import {SvgXml} from 'react-native-svg';
import {PAUSE_SMALL, CLOSE} from '../../../assets/images/svg';
import {FONT_LIGHT2, BLACK} from '../../../constants/colors';
import {SliderMinimized} from '../SliderMinimized';

export const BottomPlayer = () => {
  return (
    <>
      <View style={styles.container}>
        <View>
          <View style={styles.podcastInfo}>
            <Text type={'H5'} style={styles.textPublicationUpperCase}>
              {`puck : `}
            </Text>
            <Text type={'H5'} style={styles.textPublicationCapitalized}>
              the power that be
            </Text>
          </View>
          <Text type={'H7'} style={styles.title}>
            how long can putin last ?
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <SvgXml xml={PAUSE_SMALL} style={{marginRight: 19}} />
          <SvgXml xml={CLOSE} />
        </View>
      </View>
      <SliderMinimized />
    </>
  );
};
