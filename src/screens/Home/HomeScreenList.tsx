import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useCallback} from 'react';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from 'react-navigation-stack/lib/typescript/src/vendor/types';

import Colors from '../../theme/colors';
import ImageWithTitle from '../../components/common/ImageWithTitle';
import {
  moderateScale,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
} from '../../helpers/responsive';
import NoData from '../../components/common/NoData';
import {FlickrImage} from '../../types/flickrTypes';

type Props = {
  title?: string;
  data: FlickrImage[];
  isHorizontal: boolean;
};

const HomeScreenList: React.FC<Props> = ({
  title = '',
  data = [],
  isHorizontal = false,
}) => {
  const navigation = useNavigation<StackNavigationProp>();

  const _handleAnImage = useCallback((item = {}) => {
    navigation.navigate('ImageDetailScreen', {
      data: {...item, categoryTitle: title},
    });
  }, []);

  return (
    <View>
      {title && <Text style={styles.title}>{title}</Text>}
      <FlatList
        horizontal={isHorizontal}
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.imageContainer,
              !isHorizontal && styles.imageContainerVertical,
            ]}
            onPress={() => {
              _handleAnImage(item);
            }}>
            <ImageWithTitle
              isHorizontal={isHorizontal}
              key={index}
              image={item}
            />
          </TouchableOpacity>
        )}
        ListEmptyComponent={() => <NoData />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: moderateScale(22),
    fontWeight: 'bold',
    marginBottom: moderateScale(10),
    letterSpacing: 0.5,
  },
  imageContainer: {
    width: moderateScale(200),
    height: moderateScale(200),
    marginBottom: moderateScale(10),
    marginRight: moderateScale(6),
    borderWidth: 1,
    borderColor: Colors.borderGrey,
    borderRadius: moderateScale(10),
    paddingVertical: moderateScale(6),
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainerVertical: {
    width: SCREEN_WIDTH * 0.9,
    height: SCREEN_HEIGHT * 0.4,
  },
});

export default HomeScreenList;
