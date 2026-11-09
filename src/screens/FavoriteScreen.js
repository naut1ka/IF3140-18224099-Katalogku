import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import HeaderBar from '../components/HeaderBar';
import Card from '../components/Card';
import { useFavorite } from '../context/FavoriteContext';
import { COLORS, TYPOGRAPHY } from '../theme/colors';

export default function FavoriteScreen({ navigation }) {
  const { favorites } = useFavorite();

  return (
    <View style={styles.container}>
      <HeaderBar title="Favorit" subtitle={`${favorites.length} produk`} />
      <FlatList
        data={favorites}
        numColumns={2}
        keyExtractor={(item) => String(item.id)}
        contentContainerStyle={styles.list}
        ListEmptyComponent={
          <Text style={styles.empty}>Belum ada produk favorit</Text>
        }
        renderItem={({ item }) => (
          <View style={{ width: '50%' }}>
            <Card
              title={item.title}
              price={item.price}
              image={item.thumbnail}
              onPress={() => navigation.navigate('Detail', { id: item.id })}
            />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  list: { padding: 10 },
  empty: {
    ...TYPOGRAPHY.isi,
    textAlign: 'center',
    color: COLORS.muted,
    marginTop: 40,
  },
});