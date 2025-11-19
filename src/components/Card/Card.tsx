import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './Card.styles';

interface CardProps {
  icone: string;
  titulo: string;
}

export const Card: React.FC<CardProps> = ({ icone, titulo }) => {
  const iconEmoji = {
    'Viagem': '🚗',
    'Reserve': '🗓️',
    'Seniors': '👵',
    'Teens': '🎒',
  }[icone] || '❓';
  
  return (
    <TouchableOpacity style={styles.cardContainer}>
      <View style={styles.iconPlaceholder}>
        <Text style={styles.iconText}>{iconEmoji}</Text> 
      </View>
      <Text style={styles.cardTitle}>{titulo}</Text>
    </TouchableOpacity>
  );
};