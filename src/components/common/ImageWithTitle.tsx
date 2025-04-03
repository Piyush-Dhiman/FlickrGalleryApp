import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React, {useCallback} from 'react';
import FastImage, {FastImageProps} from 'react-native-fast-image';
import FIcon from 'react-native-vector-icons/FontAwesome';
import {useDispatch} from 'react-redux';

import Colors from '../../theme/colors';
import {
  moderateScale,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
} from '../../helpers/responsive';
import {FlickrImage} from '../../types/flickrTypes';
import {saveFavourites} from '../../redux/actions/favouriteAction';

type Props = {
  title?: string;
  image: FlickrImage;
  imageResizeMode?: undefined;
  imageStyle?: FastImageProps;
  titleStyle?: ViewStyle;
  textNoOfLines?: number;
  isHorizontal?: boolean;
};

const ImageWithTitle: React.FC<Props> = ({
  image,
  imageResizeMode,
  imageStyle,
  titleStyle,
  textNoOfLines,
  isHorizontal,
}) => {

  const dispatch = useDispatch();

  /**
   * @param image - post object containing post data
   * @description - dispatches an action to save a favourite post
   */
  const _handleFavourite = useCallback((image: FlickrImage) => {
    dispatch(saveFavourites({...image, isFavourite: true}));
  }, []);

  return (
    <View>
      <View>
        <FastImage
          source={{
            uri: image.media.m,
            priority: FastImage.priority.high, // Prioritizes loading
            cache: FastImage.cacheControl.immutable, // caches image
          }}
          style={[
            styles.image,
            !isHorizontal && styles.verticalImage,
            imageStyle,
          ]}
          resizeMode={imageResizeMode || FastImage.resizeMode.cover}
        />
        <TouchableOpacity
          style={styles.iconWrapper}
          onPress={() => _handleFavourite(image)}>
          <FIcon
            name={image?.isFavourite ? 'heart' : 'heart-o'}
            size={moderateScale(22)}
            color={image?.isFavourite ? Colors.darkRed : Colors.white}
          />
        </TouchableOpacity>
      </View>
      <Text
        style={[
          styles.title,
          titleStyle,
          !isHorizontal && styles.verticalTitle,
        ]}
        numberOfLines={textNoOfLines || 1}
        ellipsizeMode="tail">
        {(image?.title.trim()?.length && image.title) || 'N/A'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 180,
    height: 150,
    borderRadius: 10,
  },
  title: {
    marginTop: 5,
    fontSize: 16,
    fontWeight: 'medium',
    width: 180,
    textAlign: 'center',
    color: Colors.textBlue,
    textTransform: 'capitalize',
    letterSpacing: 0.2,
  },
  iconWrapper: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    borderWidth: 2,
    elevation: 10,
    borderColor: Colors.white,
    borderRadius: moderateScale(50),
    padding: moderateScale(6),
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
  },
  verticalImage: {
    width: SCREEN_WIDTH * 0.85,
    height: SCREEN_HEIGHT * 0.35,
  },
  verticalTitle: {
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
export default ImageWithTitle;
