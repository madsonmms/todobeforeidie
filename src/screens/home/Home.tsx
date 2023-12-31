import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';


import { ButtonComponent } from '../../components/shared/Button';
import { useNavigation } from '@react-navigation/native';

SplashScreen.preventAutoHideAsync();

export default function HomeScreen() {

  const navigation = useNavigation();

  function navToUserRoutes() {
    navigation.navigate('AuthenticatedRoute')
}

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
      <Text style={styles.title}>To Do Before I Die</Text>
      <View style={styles.buttonsContainer}>

        <ButtonComponent
          title={'Acessar conta'} 
          navigate={navToUserRoutes}
          />

        <ButtonComponent
          title={'Criar nova conta'} 
          />

      </View>
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
  buttonsContainer: {
    gap: 20,
  }
});
