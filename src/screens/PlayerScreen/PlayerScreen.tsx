import {View, Pressable} from 'react-native';
import React from 'react';
import {ScreenPropsPlayer} from '../../navigation/types';
import {Header} from './Header';
import {BottomBar} from './BottomBar';
import {Text} from '../../components/Text';
import {FONT_DARK2} from '../../constants/colors';
import {SvgXml} from 'react-native-svg';
import {
  FIFTEEN_BACK,
  PLAY_BUTTON,
  THIRTY_FORWARD,
} from '../../assets/images/svg';
import {TranscriptionButton} from './TranscriptionButton';
import {Slider} from './Slider';
import {Image} from './Image/Image';
import {EpisodeTitle} from './EpisodeTitle';
import {SliderControls} from './SliderControls/SliderControls';
import {Description} from './Description/Description';

const PlayerScreen = ({navigation}: ScreenPropsPlayer) => {
  return (
    <View style={{flex: 1}}>
      <Header />
      <View style={{paddingVertical: 32, paddingHorizontal: 21}}>
        <Image />
        <EpisodeTitle title={'how long can putin last?'} />
        <Slider />
        <SliderControls />
        <TranscriptionButton />
        <Description />
      </View>
      <BottomBar />
    </View>
  );
};

export default PlayerScreen;
