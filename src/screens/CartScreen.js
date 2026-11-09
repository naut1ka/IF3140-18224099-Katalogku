import React from 'react';
import { View, Text } from 'react-native';
import HeaderBar from '../components/HeaderBar';
import { COLORS } from '../theme/colors';

export default function CartScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.background }}>
      <HeaderBar title="Keranjang" />
      <Text style={{ padding: 16 }}>Keranjang belanja masih kosong</Text>
    </View>
  );
}