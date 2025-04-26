import { Text } from 'react-native';
import type { ITextProps } from './Text.types';
import { styles } from './TextStyles';

const TextComponent = (props: ITextProps) => {
  const {
    title,
    style,
    shadowEnabled,
    fontFamily,
    fontSize,
    textAlign,
    textColor,
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
      ]}
    >
      {title}
    </Text>
  );
};

export default TextComponent;
