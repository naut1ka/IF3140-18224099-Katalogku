export function validateProfile(values) {
  const errors = {};
  if (!values.name.trim()) {
    errors.name = 'Nama wajib diisi';
  }
  if (!/^\S+@\S+\.\S+$/.test(values.email)) {
    errors.email = 'Format email tidak valid';
  }
  if (!/^08\d{8,11}$/.test(values.phone)) {
    errors.phone = 'No. HP diawali 08, total 10-13 digit';
  }
  if (values.password.length < 8) {
    errors.password = 'Password minimal 8 karakter';
  }
  if (
    values.confirmPassword !== undefined &&
    values.confirmPassword !== values.password
  ) {
    errors.confirmPassword = 'Password tidak sama';
  }
  return errors;
}