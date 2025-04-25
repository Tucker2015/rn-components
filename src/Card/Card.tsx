import { View, Text } from 'react-native';
import type { ICardProps } from './Card.types';
import { styles } from './CardStyles';
import Button from '../Button/Button';

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
      <Text
        style={[
          styles.title,
          props.titleFontFamily ? { fontFamily: props.titleFontFamily } : null,
          props.titleFontSize ? { fontSize: props.titleFontSize } : null,
        ]}
      >
        {props.title}
      </Text>
      <View style={styles.divider} />
      <Text
        style={[
          styles.description,
          props.descriptionFontFamily
            ? { fontFamily: props.descriptionFontFamily }
            : null,
          props.descriptionFontSize
            ? { fontSize: props.descriptionFontSize }
            : null,
        ]}
      >
        {props.description}
      </Text>
      {props.buttonEnabled && (
        <Button title={props.buttonText} onPress={props.buttonOnPress} />
      )}
    </View>
  );
};

export default Card;
