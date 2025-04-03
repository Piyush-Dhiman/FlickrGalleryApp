import React from 'react';
import {View, StyleSheet, ActivityIndicator, ViewStyle} from 'react-native';

import Colors from '../../theme/colors';

type Props = {
  container?: ViewStyle;
  size?: number;
  color?: string;
};

const Loader: React.FC<Props> = ({container, size, color}) => {
  return (
    <View style={[styles.container, {...container}]}>
      <ActivityIndicator size={size || 'large'} color={color || '#000'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.transparent,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Loader;
