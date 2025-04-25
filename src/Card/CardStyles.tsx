import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  card: {
    backgroundColor: 'hsl(0, 0.00%, 96.90%)',
    borderRadius: 8,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
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
    fontWeight: 'bold',
  },
});
