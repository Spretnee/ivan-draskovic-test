import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  contentContainer: {},
  backgroundStyle: {
    borderColor: 'green',
    // borderStyle: 'solid',
    borderRadius: 6,
    // borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    height: 60,
  },

  pressableStyle: {
    // borderColor: 'yellow',
    // borderStyle: 'solid',
    // borderWidth: 1,
    minHeight: 64,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sheetContainer: {
    marginHorizontal: 8,
    paddingLeft: 8,
    paddingRight: 16,
    marginLeft: 10,
    // borderColor: 'blue',
    // borderStyle: 'solid',
    // borderWidth: 1,
    alignContent: 'center',
    margin: -10,
  },
  image: { width: 40, height: 40, borderRadius: 4 },
});
