import {View} from 'react-native';
import {Engagement} from './Engagement';
import {BottomBarActions} from './BottomBarActions/BottomBarActions';
import {styles} from './BottomBar.styles';

export const BottomBar = () => {
  return (
    <View style={styles.container}>
      <Engagement />
      <BottomBarActions />
    </View>
  );
};
