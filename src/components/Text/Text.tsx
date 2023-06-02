import {Text as RNText, TextStyle} from 'react-native';
import React from 'react';
import styles from './Text.styles';

type CustomTextProps = {
  children: string | React.ReactNode;
  type: 'H1' | 'H2' | 'H3' | 'H3_BOLD' | 'H4' | 'H5' | 'H6' | 'H7';
  style?: TextStyle;
  numberOfLines?: number;
};

export const Text = ({
  children = '',
  numberOfLines = undefined,
  type = 'H1',
  style,
  ...restProps
}: CustomTextProps) => (
  <RNText
    numberOfLines={numberOfLines}
    style={[styles.default, styles[type], {...style}]}
    {...restProps}>
    {children}
  </RNText>
);
