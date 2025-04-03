import {Dimensions} from 'react-native';

export const guidelineBaseWidth = 350;
export const guidelineBaseHeight = 680;

export const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} =
  Dimensions.get('window');

export const scaleSize = (size: number) =>
  (SCREEN_WIDTH / guidelineBaseWidth) * size;

export const moderateScale = (size: number, factor = 0.5) => {
  return size + (scaleSize(size) - size) * factor;
};
