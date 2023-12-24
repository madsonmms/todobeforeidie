import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';

import { FontAwesome5 } from '@expo/vector-icons'; 

SplashScreen.preventAutoHideAsync();

export default function ProfileInfoScreen( {navigation}) {

  const [fontsLoaded, fontError] = useFonts({
    'HarimauDua': require('../../assets/fonts/DK-Harimau-Dua.otf')
  });

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
        <TouchableOpacity onPress={navigation.goBack()}>
        <FontAwesome5 name="angle-left" size={24} color="black" />
        </TouchableOpacity>
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
