import { Controller, FieldValues, useForm } from 'react-hook-form';
import { Button, SafeAreaView, TextInput } from 'react-native';
import { FONT_DARK1, FONT_DARK2, GREEN } from '../../constants/colors';
import { useNavigation } from '@react-navigation/native';

type SearchBarProps = {
  onSearch: (searchText: FieldValues) => void;
};

export const SearchBar = ({ onSearch }: SearchBarProps) => {
  const { control, handleSubmit } = useForm();
  const { navigate } = useNavigation<any>();

  const onSubmit = (data: FieldValues) => {
    onSearch(data.searchText);
  };

  return (
    <SafeAreaView style={{ padding: 8 }}>
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <TextInput
            onPressIn={() => navigate('SearchOptions')}
            onFocus={() => navigate('SearchOptions')}
            onChangeText={text => onChange(text)}
            value={value}
            style={{ color: FONT_DARK1 }}
            placeholder="What would you want to listen to?"
            placeholderTextColor={FONT_DARK2}
          />
        )}
        name="searchText"
        defaultValue=""
      />
      <Button title="Search" onPress={handleSubmit(onSubmit)} color={GREEN} />
    </SafeAreaView>
  );
};
