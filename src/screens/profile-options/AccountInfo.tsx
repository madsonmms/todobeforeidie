import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';

import * as Fonts from "../../components/shared/fonts/Fonts"

SplashScreen.preventAutoHideAsync();

export default function AccountInfoScreen() {

  const [fontsLoaded, fontError] = useFonts(Fonts.FontList);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <Text style={styles.title}>Regras</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCFBF5',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 70,
  },
  title: {
    width: 296,
    color: '#8D9AA6',
    fontFamily: 'HarimauDua',
    fontSize: 48,
    textAlign: 'center',
  },
});
