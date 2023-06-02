import {View, Image, Pressable} from 'react-native';
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

const PlayerScreen = ({navigation}: ScreenPropsPlayer) => {
  return (
    <View style={{flex: 1}}>
      <Header />
      <View style={{paddingVertical: 32, paddingHorizontal: 21}}>
        <View
          style={{
            width: '100%',
            justifyContent: 'center',
            flexDirection: 'row',
          }}>
          <Image
            style={{width: 160, height: 160}}
            source={{
              uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
            }}
          />
        </View>
        <View style={{alignItems: 'center'}}>
          <Text
            type="H2"
            style={{textTransform: 'capitalize', color: FONT_DARK2}}>
            how long can putin last?
          </Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <View
            style={{
              width: 176,
              height: 56,
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 12,
            }}>
            <SvgXml xml={FIFTEEN_BACK} />
            <SvgXml xml={PLAY_BUTTON} />
            <SvgXml xml={THIRTY_FORWARD} />
          </View>
          <Text
            style={{position: 'absolute', bottom: '38%', right: 0}}
            type="H3_BOLD">
            1x
          </Text>
          <Text
            style={{position: 'absolute', bottom: '38%', right: 0}}
            type="H3_BOLD">
            1.5x
          </Text>
          <Text
            style={{position: 'absolute', bottom: '38%', right: 0}}
            type="H3_BOLD">
            2x
          </Text>
          <Text
            style={{position: 'absolute', bottom: '38%', right: 0}}
            type="H3_BOLD">
            4x
          </Text>
        </View>
        <TranscriptionButton />
        <Text type="H4" numberOfLines={2}>
          Julia Ioffe joins Peter to discuss how Putin's war is playing out in
          Moscow and St. Petersburg. Meanwhile, Ben Landy and Bill Cohan discuss
          an investment banking tragedy 150 years in the making.
        </Text>
        <Pressable>
          <Text type="H4" style={{textDecorationLine: 'underline'}}>
            See More
          </Text>
        </Pressable>
      </View>

      <BottomBar />
    </View>
  );
};

export default PlayerScreen;
