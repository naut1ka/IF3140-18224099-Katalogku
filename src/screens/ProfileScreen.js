import React from 'react';
import { View, ScrollView, Alert, StyleSheet } from 'react-native';
import HeaderBar from '../components/HeaderBar';
import CustomInput from '../components/CustomInput';
import Button from '../components/Button';
import useForm from '../hooks/useForm';
import { validateProfile } from '../utils/validators';
import { COLORS } from '../theme/colors';

const INITIAL_VALUES = {
  name: '',
  email: '',
  phone: '',
  password: '',
  confirmPassword: '',
};

export default function ProfileScreen({ navigation }) {
  const { values, errors, handleChange, handleSubmit, reset } =
    useForm(INITIAL_VALUES, validateProfile);

  const isEmpty = Object.values(values).some((v) => !v.trim());

  const handleSave = (data) => {
    Alert.alert('Berhasil', `Profil ${data.name} tersimpan!`);
    reset();
  };

  return (
    <View style={styles.container}>
      <HeaderBar title="Profil" subtitle="Lengkapi data akunmu" />
      <ScrollView
        contentContainerStyle={styles.form}
        keyboardShouldPersistTaps="handled"
      >
        <CustomInput
          label="Nama Lengkap"
          value={values.name}
          onChangeText={handleChange('name')}
          error={errors.name}
        />
        <CustomInput
          label="Email"
          value={values.email}
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={handleChange('email')}
          error={errors.email}
        />
        <CustomInput
          label="No. HP"
          value={values.phone}
          keyboardType="phone-pad"
          onChangeText={handleChange('phone')}
          error={errors.phone}
        />
        <CustomInput
          label="Password"
          value={values.password}
          secureTextEntry
          onChangeText={handleChange('password')}
          error={errors.password}
        />
        <CustomInput
          label="Ulangi Password"
          value={values.confirmPassword}
          secureTextEntry
          onChangeText={handleChange('confirmPassword')}
          error={errors.confirmPassword}
        />

        <View style={styles.buttonGroup}>
          <Button
            title="Simpan Profil"
            disabled={isEmpty}
            onPress={handleSubmit(handleSave)}
          />
          <Button
            title="Tentang Aplikasi"
            variant="outline"
            onPress={() => navigation.navigate('About')}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  form: {
    padding: 16,
    paddingBottom: 32,
  },
  buttonGroup: {
    marginTop: 8,
    gap: 12,
  },
});