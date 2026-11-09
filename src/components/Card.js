import React from 'react';
import { Pressable, View, Text, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, TYPOGRAPHY } from '../theme/colors';

export const formatRupiah = (angka) =>
  'Rp' + Number(angka).toLocaleString('id-ID');

export default function Card({
  title,
  category,
  price,
  rating,
  reviews,
  discount,
  image,
  isFavorite = false,
  onPress,
  onToggleFavorite,
}) {
  return (
    <Pressable style={styles.card} onPress={onPress}>
      <View style={styles.imageWrapper}>
        <Image source={{ uri: image }} style={styles.image} resizeMode="cover" />

        {discount ? (
          <View style={styles.discountBadge}>
            <Text style={styles.discountText}>-{discount}%</Text>
          </View>
        ) : null}

        <Pressable
          style={styles.heartButton}
          onPress={onToggleFavorite}
          hitSlop={8}
        >
          <Ionicons
            name={isFavorite ? 'heart' : 'heart-outline'}
            size={16}
            color={isFavorite ? COLORS.danger : COLORS.primary}
          />
        </Pressable>
      </View>

      <View style={styles.body}>
        {category ? <Text style={styles.category}>{category}</Text> : null}
        <Text style={styles.title} numberOfLines={2}>
          {title}
        </Text>
        <Text style={styles.price}>{formatRupiah(price)}</Text>

        {rating ? (
          <View style={styles.ratingRow}>
            <Ionicons name="star" size={12} color={COLORS.star} />
            <Text style={styles.ratingValue}>{rating}</Text>
            {reviews ? (
              <Text style={styles.reviewText}> · {reviews} ulasan</Text>
            ) : null}
          </View>
        ) : null}
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    margin: 6,
    backgroundColor: COLORS.card,
    borderRadius: 12, // Radius kartu: 12 px
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: COLORS.border,
    elevation: 2, // Elevasi kartu: 2 px
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  imageWrapper: {
    width: '100%',
    aspectRatio: 1,
    backgroundColor: COLORS.background,
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  discountBadge: {
    position: 'absolute',
    top: 8,
    left: 8,
    backgroundColor: COLORS.danger,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  discountText: {
    color: COLORS.card,
    fontSize: 10,
    fontWeight: '700',
  },
  heartButton: {
    position: 'absolute',
    top: 8,
    right: 8,
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: 'rgba(255, 255, 255, 0.92)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    padding: 12,
  },
  category: {
    ...TYPOGRAPHY.label,
    fontSize: 11,
    color: COLORS.muted,
    marginBottom: 2,
  },
  title: {
    ...TYPOGRAPHY.isi,
    fontWeight: '700',
    color: COLORS.text,
    minHeight: 42,
  },
  price: {
    ...TYPOGRAPHY.isi,
    fontWeight: '700',
    color: COLORS.primary,
    marginTop: 4,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  ratingValue: {
    ...TYPOGRAPHY.label,
    fontWeight: '600',
    color: COLORS.text,
    marginLeft: 4,
  },
  reviewText: {
    ...TYPOGRAPHY.label,
    fontSize: 11,
    color: COLORS.muted,
  },
});