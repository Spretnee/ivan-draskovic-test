import { View } from 'react-native';
import React from 'react';
import { Header } from '../PlayerScreen/Header';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import { FieldValues } from 'react-hook-form';
import { Text } from '../../components/Text';

const SearchOptionsScreen = () => {
  return (
    <View>
      <SearchBar
        onSearch={function (searchText: FieldValues): void {
          throw new Error('Function not implemented.');
        }}
      />
      <Text type={'H2'}>Recent searches</Text>
    </View>
  );
};

export default SearchOptionsScreen;
