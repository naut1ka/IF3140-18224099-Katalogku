import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator';
import { FavoriteProvider } from './src/context/FavoriteContext';

export default function App() {
  return (
    <SafeAreaProvider>
      <FavoriteProvider>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
        <StatusBar style="light" />
      </FavoriteProvider>
    </SafeAreaProvider>
  );
}