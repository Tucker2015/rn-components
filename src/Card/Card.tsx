import { View, Text, Image } from 'react-native';
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
        props.backgroundColor && { backgroundColor: props.backgroundColor },
      ]}
    >
      {props.image && (
        <View style={styles.imageWrapper}>
          <Image
            source={
              typeof props.image === 'string'
                ? { uri: props.image }
                : props.image
            }
            style={styles.image}
            resizeMode="cover"
          />
        </View>
      )}
      <View style={styles.cardContent}>
        <Text
          style={[
            styles.title,
            props.titleFontFamily
              ? { fontFamily: props.titleFontFamily }
              : null,
            props.titleFontSize ? { fontSize: props.titleFontSize } : null,
            props.titleTextColor ? { color: props.titleTextColor } : null,
          ]}
        >
          {props.title}
        </Text>
        {props.hasDivider !== false && <View style={styles.divider} />}
        {props.children}
        <Text
          style={[
            styles.description,
            props.descriptionFontFamily
              ? { fontFamily: props.descriptionFontFamily }
              : null,
            props.descriptionFontSize
              ? { fontSize: props.descriptionFontSize }
              : null,
            props.descriptionTextColor
              ? { color: props.descriptionTextColor }
              : null,
          ]}
        >
          {props.description}
        </Text>
        {props.buttonEnabled && (
          <Button
            backgroundColor={
              props.buttonBackgroundColor || 'rgba(84, 139, 154, 0.65)'
            }
            textColor={props.buttonTextColor || 'white'}
            title={props.buttonText}
            onPress={props.buttonOnPress}
          />
        )}
      </View>
    </View>
  );
};

export default Card;
