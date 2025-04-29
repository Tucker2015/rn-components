import { Text } from 'react-native';
import type { ITextProps } from './Text.types';
import { styles } from './TextStyles';

const TextComponent = (
  props: ITextProps & React.ComponentProps<typeof Text>
) => {
  const {
    text,
    style,
    shadowEnabled,
    fontFamily,
    fontSize,
    textAlign,
    textColor,
    letterSpacing,
    marginTop,
    marginBottom,
    ...otherProps
  } = props;
  return (
    <Text
      style={[
        shadowEnabled && styles.shadow,
        style,
        fontFamily ? { fontFamily } : undefined,
        fontSize ? { fontSize } : undefined,
        textAlign ? { textAlign } : undefined,
        textColor ? { color: textColor } : undefined,
        letterSpacing ? { letterSpacing } : undefined,
        marginTop ? { marginTop } : undefined,
        marginBottom ? { marginBottom } : undefined,
      ]}
      {...otherProps}
    >
      {text}
    </Text>
  );
};

export default TextComponent;
