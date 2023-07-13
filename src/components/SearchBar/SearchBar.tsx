import { Controller, FieldValues, useForm } from 'react-hook-form';
import { Button, SafeAreaView, TextInput } from 'react-native';
import { FONT_DARK1, FONT_DARK2, GREEN } from '../../constants/colors';

type SearchBarProps = {
  onSearch: (searchText: FieldValues) => void;
};

export const SearchBar = ({ onSearch }: SearchBarProps) => {
  const { control, handleSubmit } = useForm();

  const onSubmit = (data: FieldValues) => {
    onSearch(data.searchText);
  };

  return (
    <SafeAreaView style={{ padding: 8 }}>
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <TextInput
            onChangeText={text => onChange(text)}
            value={value}
            style={{ color: FONT_DARK1 }}
            placeholder="Search"
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
