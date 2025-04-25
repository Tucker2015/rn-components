import { Text } from 'react-native';

type Props = {
  title: string;
  style?: object;
};

const TextComponent = (props: Props) => {
  return <Text style={{ ...props.style }}>{props.title}</Text>;
};

export default TextComponent;
