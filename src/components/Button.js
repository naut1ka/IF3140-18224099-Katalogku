import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../theme/colors';

export default function Button({ title, onPress, variant = 'primary', icon, style }) {
  const getButtonStyle = () => {
    switch (variant) {
      case 'secondary':
        return { backgroundColor: COLORS.accent };
      case 'danger':
        return { backgroundColor: COLORS.danger }; // Merah Koral (#E63946)
      case 'outline':
        return { 
          backgroundColor: '#FFFFFF', 
          borderWidth: 1, 
          borderColor: COLORS.primary 
        };
      default:
        return { backgroundColor: COLORS.primary };
    }
  };

  const getTextColor = () => {
    if (variant === 'outline') return COLORS.primary;
    return '#FFFFFF';
  };

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[styles.button, getButtonStyle(), style]}
      onPress={onPress}
    >
      <View style={styles.contentRow}>
        {icon && (
          <Ionicons 
            name={icon} 
            size={18} 
            color={getTextColor()} 
            style={{ marginRight: 8 }} 
          />
        )}
        <Text style={[styles.text, { color: getTextColor() }]}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 48,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  contentRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 14,
    fontWeight: '600',
  },
});