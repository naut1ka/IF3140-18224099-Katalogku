import { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const FavoriteContext = createContext(null);
const STORAGE_KEY = '@pantaiku_favorites';

export function FavoriteProvider({ children }) {
  const [favorites, setFavorites] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Muat data favorit saat Provider pertama kali dibuka
  useEffect(() => {
    const loadFavorites = async () => {
      try {
        const saved = await AsyncStorage.getItem(STORAGE_KEY);
        if (saved !== null) {
          setFavorites(JSON.parse(saved));
        }
      } catch (error) {
        console.error('Gagal memuat data favorit:', error);
      } finally {
        setIsLoaded(true);
      }
    };

    loadFavorites();
  }, []);

  // Simpan setiap kali favorites berubah (setelah pemuatan awal selesai)
  useEffect(() => {
    if (!isLoaded) return;

    const saveFavorites = async () => {
      try {
        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
      } catch (error) {
        console.error('Gagal menyimpan data favorit:', error);
      }
    };

    saveFavorites();
  }, [favorites, isLoaded]);

  const isFavorite = (id) => favorites.some((p) => p.id === id);

  const toggleFavorite = (product) => {
    setFavorites((prev) =>
      prev.some((p) => p.id === product.id)
        ? prev.filter((p) => p.id !== product.id)
        : [...prev, product]
    );
  };

  const value = { favorites, isFavorite, toggleFavorite };
  return (
    <FavoriteContext.Provider value={value}>
      {children}
    </FavoriteContext.Provider>
  );
}

export function useFavorite() {
  return useContext(FavoriteContext);
}