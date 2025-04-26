import { View } from 'react-native';
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
}: LayoutTypes) => {
  return isSafeArea ? (
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
  ) : (
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
  );
};

export default Layout;
