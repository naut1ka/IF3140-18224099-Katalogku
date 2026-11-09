import React from 'react';
import { View, Text } from 'react-native';
import HeaderBar from '../components/HeaderBar';
import { COLORS } from '../theme/colors';

export default function ProfileScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.background }}>
      <HeaderBar title="Profil" />
      <Text style={{ padding: 16 }}>Segera hadir di Modul 6</Text>
    </View>
  );
}