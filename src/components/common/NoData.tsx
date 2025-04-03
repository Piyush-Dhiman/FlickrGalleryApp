import {StyleSheet, Text, View, ViewStyle} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

import {moderateScale} from '../../helpers/responsive';
import Colors from '../../theme/colors';

type Props = {
  size?: number;
  color?: string;
  children?: any;
  containerStyle?: ViewStyle;
  placeholder?: string;
  placeholderStyle?: ViewStyle;
};

const NoData = (props: Props) => {
  const {containerStyle, children, size, color, placeholder, placeholderStyle} =
    props;
  return (
    <View style={[styles.iconContainer, containerStyle]}>
      {children ? (
        children
      ) : (
        <>
          <Icon name={'inbox'} size={size || 40} color={color || Colors.gray} />
          {placeholder?.length ? (
            <Text style={[styles.placeholder, placeholderStyle]}>
              {placeholder}
            </Text>
          ) : null}
        </>
      )}
    </View>
  );
};

export default NoData;

const styles = StyleSheet.create({
  iconContainer: {
    alignItems: 'center',
    marginVertical: moderateScale(30),
  },
  placeholder: {
    fontSize: moderateScale(14),
    color: Colors.gray,
    letterSpacing: 0.5,
  },
});
