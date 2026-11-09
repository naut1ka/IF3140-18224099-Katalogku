import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, TYPOGRAPHY } from '../theme/colors';

export default function HeaderBar({ title, subtitle, onBack }) {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.bar, { paddingTop: insets.top + 16 }]}>
      <View style={styles.leftRow}>
        {onBack ? (
          <Pressable onPress={onBack} hitSlop={10} style={styles.backBtn}>
            <Ionicons name="arrow-back" size={22} color={COLORS.card} />
          </Pressable>
        ) : null}
        <View style={styles.textWrapper}>
          <Text style={styles.title}>{title}</Text>
          {subtitle ? <Text style={styles.sub}>{subtitle}</Text> : null}
        </View>
      </View>

      <View style={styles.waveBadge}>
        <Ionicons name="water-outline" size={20} color={COLORS.card} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLORS.primary,
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  leftRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  backBtn: {
    marginRight: 12,
  },
  textWrapper: {
    flex: 1,
  },
  title: {
    ...TYPOGRAPHY.subjudul,
    color: COLORS.card,
  },
  sub: {
    ...TYPOGRAPHY.label,
    color: 'rgba(255, 255, 255, 0.8)',
    marginTop: 4,
  },
  waveBadge: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 12,
  },
});