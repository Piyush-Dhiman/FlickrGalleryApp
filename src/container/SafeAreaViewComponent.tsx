import React, {useCallback} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {StackNavigationProp} from 'react-navigation-stack/lib/typescript/src/vendor/types';
import {useNavigation} from '@react-navigation/native';

import {SCREEN_HEIGHT} from '../helpers/responsive';
import Header from '../components/common/Header';


const SafeAreaViewComponent = ({
  children,
  containerStyle = {},
  screenName = '',
  isInitialScreen = false,
  hideRightBtn = false,
}) => {
  const navigation = useNavigation<StackNavigationProp>();

  const _goBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const _onRightBtnPress = useCallback(() => {
    navigation.navigate('FavouritesScreen');
  }, [navigation]);

  return (
    <SafeAreaView style={containerStyle}>
      <View>
        <Header
          hideBackBtn={isInitialScreen}
          hideRightBtn={hideRightBtn}
          screenName={screenName}
          _onLeftBtnPress={_goBack}
          _onRightBtnPress={_onRightBtnPress}
        />
        <View style={styles.children}>{children}</View>
      </View>
    </SafeAreaView>
  );
};

export default SafeAreaViewComponent;

const styles = StyleSheet.create({
  children: {height: SCREEN_HEIGHT * 0.9},
});
