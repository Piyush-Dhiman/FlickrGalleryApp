import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import IIcon from 'react-native-vector-icons/Ionicons';

import Colors from '../../theme/colors';
import {
  moderateScale,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
} from '../../helpers/responsive';

type Props = {
  hideBackBtn?: boolean;
  hideRightBtn?: boolean;
  screenName: string;
  _onLeftBtnPress: () => void;
  _onRightBtnPress: () => void;
};
const Header = (props: Props) => {
  const {
    hideBackBtn,
    screenName,
    _onLeftBtnPress,
    _onRightBtnPress,
    hideRightBtn,
  } = props;
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={_onLeftBtnPress} style={styles.back}>
        {!hideBackBtn && (
          <Icon name="arrow-left" size={25} color={Colors.white} />
        )}
      </TouchableOpacity>
      <Text style={styles.title}>{screenName}</Text>
      <TouchableOpacity onPress={_onRightBtnPress} style={styles.iconWrapper}>
        {!hideRightBtn && (
          <IIcon
            name={'heart-circle-outline'}
            size={moderateScale(30)}
            color={Colors.white}
          />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: moderateScale(7),
    height: SCREEN_HEIGHT * 0.07,
    width: SCREEN_WIDTH,
    backgroundColor: Colors.textBlue,
    paddingHorizontal: moderateScale(6),
  },
  title: {
    color: Colors.white,
    fontSize: moderateScale(20),
    fontWeight: 'bold',
    textAlignVertical: 'center',
    alignSelf: 'center',
  },
  back: {alignSelf: 'center'},
  iconWrapper: {
    marginLeft: -20,
    alignSelf: 'center',
  },
});
