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
}
