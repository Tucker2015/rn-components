import { Pressable, Text } from 'react-native';
import { styles } from './ButtonStyles';

type Props = {
  title: string | undefined;
  onPress?: () => void;
};

const Button = (props: Props) => {
  return (
    <Pressable style={styles.button} onPress={props.onPress}>
      <Text style={styles.buttonText}>{props.title}</Text>
    </Pressable>
  );
};

export default Button;
