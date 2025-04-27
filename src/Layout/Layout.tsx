import { View, ImageBackground } from 'react-native';
import { styles } from './LayoutStyles';
import type { LayoutTypes } from './Layout.types';
import { SafeAreaView } from 'react-native-safe-area-context';
const Layout = ({
  children,
  isSafeArea,
  backgroundColor,
  padding,
  isCentered,
  isJustify,
  isImageBackground,
  backgroundImage,
  overlayColor,
  imageBackgroundBlurRadius,
}: LayoutTypes) => {
  // Both SafeArea and ImageBackground
  if (isSafeArea && isImageBackground) {
    return (
      <ImageBackground
        blurRadius={imageBackgroundBlurRadius ?? 0}
        source={backgroundImage}
        style={styles.container}
      >
        <View
          style={[styles.backgroundOverlay, { backgroundColor: overlayColor }]}
        />
        <SafeAreaView
          style={[
            styles.container,
            {
              backgroundColor: backgroundColor ?? 'hsl(0, 0.00%, 100.00%)',
              padding: padding ?? 0,
              ...(isJustify ? { justifyContent: 'center' } : {}),
              ...(isCentered ? { alignItems: 'center' } : {}),
            },
          ]}
        >
          {children}
        </SafeAreaView>
      </ImageBackground>
    );
  }
  // Only SafeArea
  if (isSafeArea) {
    return (
      <SafeAreaView
        style={[
          styles.container,
          {
            backgroundColor: backgroundColor ?? 'hsl(0, 0.00%, 100.00%)',
            padding: padding ?? 0,
            ...(isJustify ? { justifyContent: 'center' } : {}),
            ...(isCentered ? { alignItems: 'center' } : {}),
          },
        ]}
      >
        {children}
      </SafeAreaView>
    );
  }
  // Only ImageBackground
  if (isImageBackground) {
    return (
      <ImageBackground
        blurRadius={imageBackgroundBlurRadius ?? 0}
        source={backgroundImage}
        style={styles.container}
      >
        <View
          style={[styles.backgroundOverlay, { backgroundColor: overlayColor }]}
        />
        <View
          style={[
            styles.container,
            {
              backgroundColor: backgroundColor ?? 'hsl(0, 0.00%, 60.00%)',
              padding: padding ?? 0,
              ...(isJustify ? { justifyContent: 'center' } : {}),
              ...(isCentered ? { alignItems: 'center' } : {}),
            },
          ]}
        >
          {children}
        </View>
      </ImageBackground>
    );
  }
  // Default fallback
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: backgroundColor ?? 'hsl(0, 0.00%, 100.00%)',
          padding: padding ?? 0,
          ...(isJustify ? { justifyContent: 'center' } : {}),
          ...(isCentered ? { alignItems: 'center' } : {}),
        },
      ]}
    >
      {children}
    </View>
  );
};

export default Layout;
