import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  tabBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
    paddingTop: 10,
    paddingBottom: 25, 
    backgroundColor: '#fff',
  },
  tabItem: {
    alignItems: 'center',
    flex: 1,
  },
  icon: { fontSize: 24 },
  label: { fontSize: 12, color: '#888' },
  activeLabel: { color: '#000', fontWeight: 'bold' },
});