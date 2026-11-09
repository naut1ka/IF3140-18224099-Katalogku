import React from 'react';
import { View, Text } from 'react-native';
import HeaderBar from '../components/HeaderBar';
import { COLORS } from '../theme/colors';

export default function FavoriteScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.background }}>
      <HeaderBar title="Favorit" />
      <Text style={{ padding: 16 }}>Segera hadir di Modul 6</Text>
    </View>
  );
}