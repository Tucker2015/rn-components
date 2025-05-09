import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  card: {
    backgroundColor: 'hsl(0, 0.00%, 96.90%)',
    borderRadius: 8,
    shadowColor: '#000', // Use a solid color for shadowColor
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10,
  },
  cardContent: {
    padding: 16,
  },
  description: {
    fontSize: 14,
    color: 'hsl(0, 0.00%, 25.90%)',
    marginTop: 8,
  },
  divider: {
    height: 1,
    backgroundColor: 'hsl(0, 0.00%, 60.20%)',
    marginVertical: 8,
  },
  title: {
    fontSize: 18,
  },
  image: {
    width: 'auto',
    height: 200,
  },
  imageWrapper: {
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    overflow: 'hidden',
  },
});
