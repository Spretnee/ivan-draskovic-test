import {Controller, FieldValues, useForm} from 'react-hook-form';
import {Button, TextInput} from 'react-native';

type SearchBarProps = {
  onSearch: (searchText: FieldValues) => void;
};

export const SearchBar = ({onSearch}: SearchBarProps) => {
  const {control, handleSubmit} = useForm();

  const onSubmit = (data: FieldValues) => {
    onSearch(data.searchText);
  };

  return (
    <>
      <Controller
        control={control}
        render={({field: {onChange, value}}) => (
          <TextInput
            onChangeText={text => onChange(text)}
            value={value}
            placeholder="Search"
          />
        )}
        name="searchText"
        defaultValue=""
      />
      <Button title="Search" onPress={handleSubmit(onSubmit)} />
    </>
  );
};
