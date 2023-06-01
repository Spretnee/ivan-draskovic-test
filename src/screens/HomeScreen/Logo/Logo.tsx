import {View} from 'react-native';
import React from 'react';
import {SvgXml} from 'react-native-svg';
import {MAIN_LOGO_XML} from '../../../assets/images/svg';

const Logo = () => {
  return (
    <SvgXml xml={MAIN_LOGO_XML} style={{marginBottom: 28, marginTop: 60}} />
  );
};

export default Logo;
