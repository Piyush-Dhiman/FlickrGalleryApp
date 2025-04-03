import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ImageWithTitle from '../../components/common/ImageWithTitle';
import Colors from '../../theme/colors';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../helpers/responsive';
import SafeAreaViewComponent from '../../container/SafeAreaViewComponent';
import Strings from '../../constants/strings';

type Props = {
  route: {
    params: {};
  };
};

const ImageDetailScreen: React.FC<Props> = ({route}) => {
  const {params = {}} = route;
  return (
    <SafeAreaViewComponent screenName={Strings.common.imgDetails}>
      <View style={styles.container}>
        <ImageWithTitle
          textNoOfLines={2}
          image={params?.data}
          isHorizontal={false}
          imageStyle={styles.image}
          titleStyle={styles.title}
          imageResizeMode={"cover"}
        />
      </View>
    </SafeAreaViewComponent>
  );
};

export default ImageDetailScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: 20,
  },
  image: {
    width: SCREEN_WIDTH * 0.9,
    height: SCREEN_HEIGHT * 0.4,
    borderWidth: 1,
    borderColor: Colors.borderGrey,
    borderRadius: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: Colors.textBlue,
    alignSelf: 'center',
    marginTop: 10,
    width: SCREEN_WIDTH * 0.9,
  },
});
