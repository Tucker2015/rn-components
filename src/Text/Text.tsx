import { Text } from 'react-native';
import type { ITextProps } from './Text.types';

const TextComponent = (props: ITextProps) => {
  return <Text style={{ ...props.style }}>{props.title}</Text>;
};

export default TextComponent;
