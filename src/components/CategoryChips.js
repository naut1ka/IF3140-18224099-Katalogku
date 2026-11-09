import React from 'react';
import { ScrollView, Pressable, Text, StyleSheet } from 'react-native';
import { COLORS, TYPOGRAPHY } from '../theme/colors';

export default function CategoryChips({ items, selected, onSelect }) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.scroll}
      contentContainerStyle={styles.row}
    >
      {items.map((item) => {
        const aktif = item === selected;
        return (
          <Pressable
            key={item}
            onPress={() => onSelect(item)}
            style={[styles.chip, aktif && styles.chipAktif]}
          >
            <Text
              numberOfLines={1}
              style={[styles.text, aktif && styles.textAktif]}
            >
              {item}
            </Text>
          </Pressable>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: {
    flexGrow: 0,
    flexShrink: 0,
  },
  row: {
    paddingHorizontal: 16,
    paddingBottom: 12,
    gap: 8,
    alignItems: 'center',
  },
  chip: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: COLORS.card, // Permukaan putih sesuai panduan
    borderWidth: 1,
    borderColor: COLORS.border,
    justifyContent: 'center',
    alignItems: 'center',
  },
  chipAktif: {
    backgroundColor: COLORS.primary, // Warna utama (#0A4D68)
    borderColor: COLORS.primary,
  },
  text: {
    ...TYPOGRAPHY.label,
    fontWeight: '600',
    color: COLORS.muted,
    includeFontPadding: false,
  },
  textAktif: {
    color: COLORS.card,
  },
});