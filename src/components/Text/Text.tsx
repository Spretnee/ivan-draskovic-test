import {Text as RNText, TextStyle} from 'react-native';
import React from 'react';
import styles from './styles';

type TextProps = {
  children: string | React.ReactNode;
  type: 'H1' | 'H2' | 'H3' | 'H4';
  style?: TextStyle;
};

export const Text = ({
  children = '',
  type = 'H1',
  style,
  ...restProps
}: TextProps) => (
  <RNText style={[styles.default, styles[type], style]} {...restProps}>
    {children}
  </RNText>
);
