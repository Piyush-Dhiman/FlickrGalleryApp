import React, {useEffect} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {
  getListOneFeed,
  getListTwoFeed,
  getListThreeFeed,
} from '../../redux/actions/feedAction';
import Loader from '../../components/common/Loader';
import HomeScreenList from './HomeScreenList';
import SafeAreaViewComponent from '../../container/SafeAreaViewComponent';
import {moderateScale, SCREEN_HEIGHT} from '../../helpers/responsive';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const {listOneFeed, listTwoFeed, listThreeFeed, loading} = useSelector(
    (state: any) => state.gallery,
  );

  useEffect(() => {
    Promise.all([
      dispatch(getListOneFeed('nature')),
      dispatch(getListTwoFeed('dogs')),
      dispatch(getListThreeFeed('kittens')),
    ]);
  }, []);

  return (
    <SafeAreaViewComponent isInitialScreen={true} screenName="Home">
      <View style={styles.content}>
        {loading ? (
          <Loader />
        ) : (
          <View>
            <ScrollView nestedScrollEnabled>
              <HomeScreenList
                title="Kittens"
                data={listThreeFeed}
                isHorizontal={true}
              />
              <HomeScreenList
                title="Dogs"
                data={listTwoFeed}
                isHorizontal={true}
              />
              <HomeScreenList
                title="Public"
                data={listOneFeed}
                isHorizontal={true}
              />
            </ScrollView>
          </View>
        )}
      </View>
    </SafeAreaViewComponent>
  );
};

const styles = StyleSheet.create({
  content: {
    height: SCREEN_HEIGHT * 0.9,
    paddingHorizontal: 10,
  },
  imageContainer: {
    marginBottom: moderateScale(10),
    marginRight: moderateScale(6),
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: moderateScale(6),
  },
  image: {
    width: moderateScale(300),
    height: moderateScale(200),
    borderRadius: moderateScale(10),
  },
  title: {
    marginTop: moderateScale(5),
    fontSize: moderateScale(14),
    fontWeight: 'bold',
  },
});

export default HomeScreen;
