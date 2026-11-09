import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import HeaderBar from '../components/HeaderBar';
import Button from '../components/Button';
import { formatRupiah } from '../components/Card';
import { DUMMY_PRODUCTS } from '../data/dummy';
import { COLORS, TYPOGRAPHY } from '../theme/colors';

export default function DetailScreen({ route, navigation }) {
  const productId = route?.params?.id;
  const product =
    DUMMY_PRODUCTS.find((item) => item.id === productId) || DUMMY_PRODUCTS[0];
  return (
    <View style={styles.container}>
      <HeaderBar
        title={product.title}
        onBack={navigation ? () => navigation.goBack() : undefined}
      />

      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.imageCard}>
          <Image
            source={{ uri: product.thumbnail }}
            style={styles.image}
            resizeMode="cover"
          />
          {product.discount ? (
            <View style={styles.discountBadge}>
              <Text style={styles.discountText}>Hemat {product.discount}%</Text>
            </View>
          ) : null}
          <View style={styles.pagePill}>
            <Text style={styles.pageText}>1/1</Text>
          </View>
        </View>

        <Text style={styles.title}>{product.title}</Text>

        <View style={styles.metaRow}>
          <Ionicons name="star" size={14} color={COLORS.star} />
          <Text style={styles.ratingBold}> {product.rating}</Text>
          <Text style={styles.mutedText}> · {product.reviews} ulasan · </Text>
          <Text style={styles.stockText}>
            {product.stock > 0 ? 'Stok tersedia' : 'Stok habis'}
          </Text>
        </View>

        <View style={styles.priceRow}>
          <Text style={styles.price}>{formatRupiah(product.price)}</Text>
          {product.originalPrice ? (
            <Text style={styles.originalPrice}>
              {formatRupiah(product.originalPrice)}
            </Text>
          ) : null}
        </View>

        {product.subtitle ? (
          <Text style={styles.subtitle}>{product.subtitle}</Text>
        ) : null}
        <Text style={styles.desc}>{product.description}</Text>

        {product.specs ? (
          <View style={styles.specsRow}>
            {product.specs.map((spec, idx) => (
              <View key={idx} style={styles.specBox}>
                <Text style={styles.specLabel}>{spec.label}</Text>
                <Text style={styles.specValue}>{spec.value}</Text>
              </View>
            ))}
          </View>
        ) : null}

        <Button
            title={fav ? 'Hapus dari Favorit' : 'Tambah ke Favorit'}
            variant={fav ? 'outline' : 'primary'}
            onPress={() => toggleFavorit(product)}
        />
      </ScrollView>
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
    paddingBottom: 32,
  },
  imageCard: {
    width: '100%',
    aspectRatio: 1,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: COLORS.card,
    borderWidth: 1,
    borderColor: COLORS.border,
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  discountBadge: {
    position: 'absolute',
    top: 12,
    left: 12,
    backgroundColor: COLORS.danger,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
  },
  discountText: {
    ...TYPOGRAPHY.label,
    fontWeight: '700',
    color: COLORS.card,
  },
  pagePill: {
    position: 'absolute',
    bottom: 12,
    alignSelf: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  pageText: {
    ...TYPOGRAPHY.label,
    fontWeight: '600',
    color: COLORS.text,
  },
  title: {
    ...TYPOGRAPHY.judul,
    color: COLORS.text,
    marginTop: 16,
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  ratingBold: {
    ...TYPOGRAPHY.label,
    fontWeight: '700',
    color: COLORS.text,
  },
  mutedText: {
    ...TYPOGRAPHY.label,
    color: COLORS.muted,
  },
  stockText: {
    ...TYPOGRAPHY.label,
    fontWeight: '600',
    color: COLORS.success,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginTop: 12,
    gap: 8,
  },
  price: {
    ...TYPOGRAPHY.judul,
    color: COLORS.primary,
  },
  originalPrice: {
    ...TYPOGRAPHY.isi,
    color: COLORS.muted,
    textDecorationLine: 'line-through',
  },
  subtitle: {
    ...TYPOGRAPHY.isi,
    fontWeight: '700',
    color: COLORS.text,
    marginTop: 16,
  },
  desc: {
    ...TYPOGRAPHY.isi,
    color: COLORS.muted,
    marginTop: 4,
    marginBottom: 16,
  },
  specsRow: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 24,
  },
  specBox: {
    flex: 1,
    backgroundColor: COLORS.card,
    borderRadius: 12,
    padding: 12,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  specLabel: {
    ...TYPOGRAPHY.label,
    fontSize: 11,
    color: COLORS.muted,
  },
  specValue: {
    ...TYPOGRAPHY.isi,
    fontWeight: '700',
    color: COLORS.text,
    marginTop: 2,
  },
});