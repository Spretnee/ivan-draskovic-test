import { View, FlatList, Pressable } from 'react-native';
import React from 'react';
import { styles } from './SearchScreen.styles';
import { GREEN } from '../../constants/colors';
import { CATEGORIES, PodcastCategories } from '../../constants/podchaserApi';
import { Text } from '../../components/Text/Text';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import { WhatToListenButton } from './WhatToListenButton';

export const SearchScreen = ({ navigation }: any) => {
  return (
    // TODO:navigaion type safety
    <View style={styles.title}>
      <Text style={{ padding: 8 }} type={'H2'}>
        Search
      </Text>
      <WhatToListenButton />
      <Text style={{ padding: 8 }} type={'H2'}>
        Browse all
      </Text>
      <FlatList
        data={CATEGORIES}
        numColumns={2}
        contentContainerStyle={{
          alignItems: 'flex-start',
          flex: 1,
        }}
        renderItem={({ item }) => (
          <Pressable
            onPress={() =>
              navigation.navigate('CategoryScreen', {
                category: item,
              })
            }
            style={{
              flexDirection: 'row',
              margin: 8,

              borderRadius: 12,
              borderColor: GREEN,
              borderWidth: 2,
              borderStyle: 'solid',
              padding: 30,
              width: '45%',
            }}
          >
            <Text type={'H3'} style={{ textTransform: 'capitalize' }}>
              {item}
            </Text>
          </Pressable>
        )}
      />
    </View>
  );
};
