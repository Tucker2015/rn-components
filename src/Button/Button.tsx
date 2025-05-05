import { Pressable, Text } from 'react-native';
import { styles } from './ButtonStyles';

type Props = {
  title: string | undefined;
  onPress?: () => void;
  backgroundColor?: string | undefined;
  textColor?: string | undefined;
};

const Button = (props: Props) => {
  return (
    <Pressable
      style={[
        styles.button,
        props.backgroundColor
          ? { backgroundColor: props.backgroundColor }
          : null,
      ]}
      onPress={props.onPress}
    >
      <Text
        style={[
          styles.buttonText,
          props.textColor ? { color: props.textColor } : null,
        ]}
      >
        {props.title || 'Press Here'}
      </Text>
    </Pressable>
  );
};

export default Button;
