import React, { useState } from 'react';
import { StyleSheet, View, ScrollView, Text, Alert, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { COLORS } from './src/theme/colors';
import HeaderBar from './src/components/HeaderBar';
import CustomInput from './src/components/CustomInput';
import Button from './src/components/Button';
import Card from './src/components/Card';

export default function App() {
  const [inputText, setInputText] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <HeaderBar 
        title="Uji Komponen UI" 
        subtitle="Modul 3: Reusable Components" 
      />
      
      <ScrollView contentContainerStyle={styles.scrollContent}>
        
        {/* 1. Uji CustomInput */}
        <Text style={styles.sectionTitle}>1. CustomInput</Text>
        <CustomInput
          label="Input dengan Ikon"
          placeholder="Ketik sesuatu..."
          iconName="search-outline"
          value={inputText}
          onChangeText={setInputText}
        />

        {/* 2. Uji Variasi Button */}
        <Text style={styles.sectionTitle}>2. Variasi Button</Text>
        <View style={styles.buttonGap}>
          <Button title="Button Primary" variant="primary" onPress={() => Alert.alert('Primary')} />
          <Button title="Button Secondary" variant="secondary" onPress={() => Alert.alert('Secondary')} />
          <Button title="Button Outline" variant="outline" icon="pencil-outline" onPress={() => Alert.alert('Outline')} />
          <Button title="Button Danger" variant="danger" icon="log-out-outline" onPress={() => Alert.alert('Danger')} />
        </View>

        {/* 3. Uji Card Component */}
        <Text style={styles.sectionTitle}>3. Card Component</Text>
        <View style={styles.cardContainer}>
          <Card
            title="Sunscreen Gel SPF 50"
            price="Rp 89.000"
            originalPrice="Rp 110.000"
            rating="4.8"
            discount="20"
            image="https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=500&q=80"
            onPress={() => Alert.alert('Card Ditekan')}
            onBuy={() => Alert.alert('Beli Ditekan')}
          />
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  scrollContent: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.text,
    marginTop: 16,
    marginBottom: 8,
  },
  buttonGap: {
    gap: 10,
  },
  cardContainer: {
    width: '100%',
    alignItems: 'center',
  },
});