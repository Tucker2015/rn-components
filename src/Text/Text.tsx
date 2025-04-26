import { Text } from 'react-native';
import type { ITextProps } from './Text.types';
import { styles } from './TextStyles';

const TextComponent = (props: ITextProps) => {
  const { title, style, shadowEnabled, fontFamily, fontSize } = props;
  return (
    <Text
      style={[
        shadowEnabled && styles.shadow,
        style,
        fontFamily ? { fontFamily } : undefined,
        fontSize ? { fontSize } : undefined,
      ]}
    >
      {title}
    </Text>
  );
};

export default TextComponent;
