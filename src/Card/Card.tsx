import { View, Text } from 'react-native';
import type { ICardProps } from './Card.types';
import { styles } from './CardStyles';

const Card = (props: ICardProps) => {
  return (
    <View
      style={[
        styles.card,
        props.width !== undefined && {
          width: props.width as import('react-native').DimensionValue,
        },
        props.height !== undefined && {
          height: props.height as import('react-native').DimensionValue,
        },
      ]}
    >
      <Text style={[styles.title]}>{props.title}</Text>
      <View style={styles.divider} />
      <Text style={[styles.description]}>{props.description}</Text>
    </View>
  );
};

export default Card;
