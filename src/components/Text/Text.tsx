import {Text as RNText, TextStyle} from 'react-native';
import React from 'react';
import styles from './styles';

type TextProps = {
  children: string | React.ReactNode;
  as: 'H1' | 'H2' | 'H3' | 'H4';
  style?: TextStyle;
};

const Text = ({children = '', as = 'H1', style, ...restProps}: TextProps) => (
  <RNText style={[styles[as], style]} {...restProps}>
    {children}
  </RNText>
);

export default Text;
