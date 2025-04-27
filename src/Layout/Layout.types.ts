import type { ImageBackgroundProps } from 'react-native';

export interface LayoutTypes {
  padding?: number;
  isCentered?: boolean;
  isJustify?: boolean;
  backgroundColor?: string;
  isSafeArea?: boolean;
  children: React.ReactNode;
  isImageBackground?: boolean;
  backgroundImage?: ImageBackgroundProps['source'];
  overlayColor?: string;
  /**
   * Add a blur radius to the image background. This is only available on iOS and Android.
   * @platform ios android
   * @default 0
   * @example
   * <Layout
   *   isImageBackground
   *   backgroundImage={require('./assets/store.jpg')}
   *   overlayColor="rgba(0, 0, 0, 0.68)"
   *   ImageBackgroundBlurRadius={10}
   * >
   *   <Text>Blurred Background</Text>
   * </Layout>
   */
  imageBackgroundBlurRadius?: number;
}
