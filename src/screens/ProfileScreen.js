import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import HeaderBar from '../components/HeaderBar';
import Button from '../components/Button';
import { COLORS, TYPOGRAPHY } from '../theme/colors';

export default function ProfileScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <HeaderBar title="Profil" />
      <View style={styles.content}>
        <Text style={styles.placeholder}>
          Form profil segera hadir di Modul 6
        </Text>
        <Button
          title="Tentang Aplikasi"
          variant="outline"
          onPress={() => navigation.navigate('About')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  content: {
    padding: 16,
    gap: 16,
  },
  placeholder: {
    ...TYPOGRAPHY.isi,
    color: COLORS.muted,
  },
});