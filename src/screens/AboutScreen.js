import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import HeaderBar from '../components/HeaderBar';
import { COLORS, TYPOGRAPHY } from '../theme/colors';

export default function AboutScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <HeaderBar
        title="Tentang Aplikasi"
        onBack={() => navigation.goBack()}
      />
      <View style={styles.card}>
        <Text style={styles.label}>Nama Mahasiswa</Text>
        <Text style={styles.value}>Muhammad Afif Habiburrahman</Text>

        <Text style={[styles.label, { marginTop: 12 }]}>NIM</Text>
        <Text style={styles.value}>18224099</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  card: {
    margin: 16,
    padding: 16,
    backgroundColor: COLORS.card,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  label: {
    ...TYPOGRAPHY.label,
    color: COLORS.muted,
  },
  value: {
    ...TYPOGRAPHY.judul,
    fontSize: 16,
    color: COLORS.text,
    marginTop: 2,
  },
});