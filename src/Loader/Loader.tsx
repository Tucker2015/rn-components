import { View, ActivityIndicator, ImageBackground } from 'react-native';
import { styles } from './LoaderStyles';
import type { ILoaderTypes } from './Loader.types';
import { Text } from '..';
const Loader = ({
  indicatorSize = 'large',
  indicatorColor = '#000000',
  backgroundColor = 'hsl(0, 0.00%, 100.00%)',
  text = 'Loading...',
  textColor = '#000000',
  backgroundImage,
  overlayColor = 'rgba(0,0,0,0.5)',
  blurRadius,
  fontFamily,
  fontSize,
}: ILoaderTypes) => {
  return backgroundImage ? (
    <ImageBackground
      source={backgroundImage}
      style={styles.backgroundImage}
      resizeMode="cover"
      blurRadius={blurRadius ?? 0}
    >
      <View
        style={[styles.backgroundOverlay, { backgroundColor: overlayColor }]}
      />
      <View style={styles.container}>
        <ActivityIndicator size={indicatorSize} color={indicatorColor} />
        <Text
          text={text}
          style={[
            styles.text,
            { color: textColor, fontFamily: fontFamily, fontSize },
          ]}
        />
      </View>
    </ImageBackground>
  ) : (
    <View style={[styles.container, { backgroundColor }]}>
      <ActivityIndicator size={indicatorSize} color={indicatorColor} />
      <Text
        text={text}
        style={[
          styles.text,
          { color: textColor, fontFamily: fontFamily, fontSize },
        ]}
      />
    </View>
  );
};

export default Loader;
