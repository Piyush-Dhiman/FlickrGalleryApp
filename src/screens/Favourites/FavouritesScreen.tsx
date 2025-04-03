import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';

import HomeScreenList from '../Home/HomeScreenList';
import SafeAreaViewComponent from '../../container/SafeAreaViewComponent';
import Loader from '../../components/common/Loader';
import Strings from '../../constants/strings';
import Colors from '../../theme/colors';
import {moderateScale, SCREEN_HEIGHT} from '../../helpers/responsive';

type Props = {};

const FavouritesScreen: React.FC<Props> = () => {
    
  const {favourites, loading} = useSelector((state: any) => state.favourites);

  return (
    <SafeAreaViewComponent hideRightBtn={true} screenName="Favourites">
      <View style={styles.content}>
        {loading ? (
          <Loader />
        ) : (
          <View>
            <Text style={styles.text}>{Strings.common.yourFavouritePosts}</Text>
            <HomeScreenList isHorizontal={false} data={favourites} />
          </View>
        )}
      </View>
    </SafeAreaViewComponent>
  );
};

export default FavouritesScreen;

const styles = StyleSheet.create({
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    height: SCREEN_HEIGHT * 0.78,
  },
  text: {
    color: Colors.primary,
    fontWeight: 'bold',
    fontSize: moderateScale(22),
    textAlign: 'center',
    marginTop: moderateScale(30),
    marginBottom: moderateScale(10),
    letterSpacing: 0.5,
  },
});
