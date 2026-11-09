import React from 'react';
import { View, Text } from 'react-native';
import HeaderBar from '../components/HeaderBar';
import { COLORS } from '../theme/colors';

export default function AboutScreen({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.background }}>
      <HeaderBar title="Tentang Aplikasi" onBack={() => navigation.goBack()} />
      <View style={{ padding: 16 }}>
        <Text style={{ fontSize: 16, fontWeight: 'bold', color: COLORS.text }}>
          Muhammad Afif Habiburrahman
        </Text>
        <Text style={{ marginTop: 4, color: COLORS.muted }}>
          NIM: 18224099
        </Text>
      </View>
    </View>
  );
}