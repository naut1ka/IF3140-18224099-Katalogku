import React, { useState } from 'react';
import {
  View,
  FlatList,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';
import HeaderBar from '../components/HeaderBar';
import CustomInput from '../components/CustomInput';
import CategoryChips from '../components/CategoryChips';
import Card from '../components/Card';
import { DUMMY_PRODUCTS } from '../data/dummy';
import { COLORS, TYPOGRAPHY } from '../theme/colors';

export default function HomeScreen({ navigation }) {
  const { width } = useWindowDimensions();
  const numColumns = width >= 768 ? 4 : width >= 500 ? 3 : 2;

  const [query, setQuery] = useState('');
  const [kategori, setKategori] = useState('Semua');
  const [urutan, setUrutan] = useState('Default');

  const products = DUMMY_PRODUCTS;
  const categories = ['Semua', ...new Set(products.map((p) => p.category))];
  const sortOptions = ['Default', 'Termurah', 'Termahal'];

  const filtered = products.filter(
    (p) =>
      (kategori === 'Semua' || p.category === kategori) &&
      p.title.toLowerCase().includes(query.toLowerCase())
  );

  const data = [...filtered].sort((a, b) => {
    if (urutan === 'Termurah') return a.price - b.price;
    if (urutan === 'Termahal') return b.price - a.price;
    return 0;
  });

  const renderListHeader = () => (
    <View style={styles.listHeader}>
      {/* Banner Promo dengan borderRadius 12px & teks position: absolute */}
      <View style={styles.bannerCard}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80',
          }}
          style={styles.bannerImage}
        />
        <View style={styles.bannerOverlay}>
          <View style={styles.promoTag}>
            <Text style={styles.promoTagText}>PROMO PANTAI</Text>
          </View>
          <Text style={styles.bannerTitle}>Diskon 50% Perlengkapan Liburan!</Text>
          <Text style={styles.bannerSub}>Siap jelajahi garis pantai cerahmu</Text>
        </View>
      </View>

      {/* Chip Pengurutan Harga */}
      <View style={styles.sortWrapper}>
        <CategoryChips
          items={sortOptions}
          selected={urutan}
          onSelect={setUrutan}
        />
      </View>

      {/* Header Section sesuai Sistem Desain */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Pilihan untukmu</Text>
        <Text style={styles.productCount}>{data.length} produk</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <HeaderBar
        title="Katalog PantaiKu"
        subtitle="Siap untuk hari cerah berikutnya?"
      />

      <View style={styles.search}>
        <CustomInput
          placeholder="Cari perlengkapan pantaimu"
          iconName="search-outline"
          value={query}
          onChangeText={setQuery}
        />
      </View>

      <CategoryChips
        items={categories}
        selected={kategori}
        onSelect={setKategori}
      />

      <FlatList
        key={numColumns}
        data={data}
        numColumns={numColumns}
        keyExtractor={(item) => String(item.id)}
        ListHeaderComponent={renderListHeader}
        contentContainerStyle={styles.list}
        ListEmptyComponent={
          <Text style={styles.empty}>Perlengkapan tidak ditemukan</Text>
        }
        renderItem={({ item }) => (
          <View style={{ width: `${100 / numColumns}%` }}>
            <Card
              title={item.title}
              category={item.category}
              price={item.price}
              rating={item.rating}
              reviews={item.reviews}
              discount={item.discount}
              image={item.thumbnail}
              onPress={() =>
                navigation?.navigate('Detail', { product: item })
              }
            />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  search: {
    paddingHorizontal: 16,
    paddingTop: 12,
  },
  listHeader: {
    marginBottom: 4,
  },
  bannerCard: {
    marginHorizontal: 6,
    marginBottom: 12,
    height: 116,
    borderRadius: 12,
    overflow: 'hidden',
    position: 'relative',
  },
  bannerImage: {
    width: '100%',
    height: '100%',
  },
  bannerOverlay: {
    position: 'absolute',
    inset: 0,
    backgroundColor: 'rgba(10, 77, 104, 0.62)',
    padding: 16,
    justifyContent: 'center',
  },
  promoTag: {
    alignSelf: 'flex-start',
    backgroundColor: COLORS.accent,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    marginBottom: 6,
  },
  promoTagText: {
    color: COLORS.text,
    fontSize: 10,
    fontWeight: '700',
  },
  bannerTitle: {
    ...TYPOGRAPHY.isi,
    fontSize: 16,
    fontWeight: '700',
    color: COLORS.card,
  },
  bannerSub: {
    ...TYPOGRAPHY.label,
    color: COLORS.background,
    marginTop: 2,
  },
  sortWrapper: {
    marginHorizontal: -10,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 6,
    marginTop: 4,
    marginBottom: 8,
  },
  sectionTitle: {
    ...TYPOGRAPHY.subjudul,
    color: COLORS.text,
  },
  productCount: {
    ...TYPOGRAPHY.label,
    color: COLORS.muted,
  },
  list: {
    paddingHorizontal: 10,
    paddingBottom: 24,
  },
  empty: {
    ...TYPOGRAPHY.isi,
    textAlign: 'center',
    color: COLORS.muted,
    marginTop: 40,
  },
});