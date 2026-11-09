import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, TYPOGRAPHY } from '../theme/colors';

export default function CustomInput({
  label,
  value,
  onChangeText,
  placeholder,
  iconName,
  isPassword,
  hint,
  error,
}) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.wrapper}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={[styles.container, error && styles.containerError]}>
        {iconName && (
          <Ionicons
            name={iconName}
            size={18}
            color={error ? COLORS.danger : COLORS.muted}
            style={styles.leftIcon}
          />
        )}
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={COLORS.muted}
          secureTextEntry={isPassword && !showPassword}
        />
        {isPassword && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Ionicons
              name={showPassword ? 'eye-outline' : 'eye-off-outline'}
              size={18}
              color={COLORS.muted}
            />
          </TouchableOpacity>
        )}
      </View>
      {error ? (
        <Text style={styles.errorText}>{error}</Text>
      ) : hint ? (
        <Text style={styles.hintText}>{hint}</Text>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    marginBottom: 12,
  },
  label: {
    ...TYPOGRAPHY.label,
    fontWeight: '600',
    color: COLORS.text,
    marginBottom: 6,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.card,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORS.border,
    paddingHorizontal: 12,
    height: 48,
  },
  containerError: {
    borderColor: COLORS.danger,
  },
  leftIcon: {
    marginRight: 8,
  },
  input: {
    ...TYPOGRAPHY.isi,
    flex: 1,
    color: COLORS.text,
    paddingVertical: 0,
  },
  hintText: {
    ...TYPOGRAPHY.label,
    fontSize: 11,
    color: COLORS.muted,
    marginTop: 4,
  },
  errorText: {
    ...TYPOGRAPHY.label,
    fontSize: 11,
    color: COLORS.danger,
    marginTop: 4,
  },
});