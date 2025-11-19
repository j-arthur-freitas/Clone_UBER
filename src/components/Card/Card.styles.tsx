import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const cardWidth = (width - 40 - 30) / 4; 

export const styles = StyleSheet.create({
  cardContainer: {
    width: cardWidth,
    alignItems: 'center',
    marginBottom: 10,
  },
  iconPlaceholder: {
    width: 60, height: 60, borderRadius: 30,
    backgroundColor: '#eee', justifyContent: 'center', alignItems: 'center',
    marginBottom: 5,
  },
  iconText: { fontSize: 24 },
  cardTitle: { fontSize: 12, textAlign: 'center', color: '#000' },
});