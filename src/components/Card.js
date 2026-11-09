import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../theme/colors';
import Button from './Button';

export default function Card({ title, price, originalPrice, rating, discount, image, onPress, onBuy }) {
  return (
    <TouchableOpacity style={styles.card} activeOpacity={0.9} onPress={onPress}>
      {discount && (
        <View style={styles.badge}>
          <Text style={styles.badgeText}>-{discount}%</Text>
        </View>
      )}
      <Image source={{ uri: image }} style={styles.image} resizeMode="cover" />
      <View style={styles.content}>
        <Text style={styles.title} numberOfLines={1}>{title}</Text>
        
        <View style={styles.ratingRow}>
          <Ionicons name="star" size={14} color="#FFD166" />
          <Text style={styles.ratingText}>{rating}</Text>
        </View>

        <View style={styles.priceRow}>
          <Text style={styles.price}>{price}</Text>
          {originalPrice && <Text style={styles.originalPrice}>{originalPrice}</Text>}
        </View>

        <Button title="Beli" onPress={onBuy} variant="secondary" style={styles.buyBtn} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.card,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORS.border,
    overflow: 'hidden',
    marginBottom: 16,
    width: '48%',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  badge: {
    position: 'absolute',
    top: 8,
    left: 8,
    backgroundColor: COLORS.danger,
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 6,
    zIndex: 10,
  },
  badgeText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    height: 120,
    backgroundColor: '#EAEAEA',
  },
  content: {
    padding: 10,
  },
  title: {
    fontSize: 13,
    fontWeight: 'bold',
    color: COLORS.text,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
  },
  ratingText: {
    fontSize: 12,
    color: COLORS.muted,
    marginLeft: 4,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginVertical: 4,
  },
  price: {
    fontSize: 13,
    fontWeight: 'bold',
    color: COLORS.accent,
  },
  originalPrice: {
    fontSize: 10,
    color: COLORS.muted,
    textDecorationLine: 'line-through',
    marginLeft: 4,
  },
  buyBtn: {
    marginTop: 6,
    paddingVertical: 6,
  },
});