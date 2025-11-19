import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './TabBar.styles';

type TabItem = { icone: string; label: string; isActive: boolean };

const tabItems: TabItem[] = [
  { icone: '🏠', label: 'Página inicial', isActive: true },
  { icone: '⋮', label: 'Opções', isActive: false },
  { icone: '📜', label: 'Atividade', isActive: false },
  { icone: '👤', label: 'Conta', isActive: false },
];

export const TabBar = () => {
  return (
    <View style={styles.tabBarContainer}>
      {tabItems.map((item, index) => (
        <TouchableOpacity key={index} style={styles.tabItem}>
          <Text style={styles.icon}>{item.icone}</Text>
          <Text style={[styles.label, item.isActive && styles.activeLabel]}>
            {item.label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};