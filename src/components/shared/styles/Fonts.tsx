import { useFonts } from "expo-font";
import { StyleSheet, Text } from "react-native";3

export async function FontsLoad() {

    const [fontsLoaded] = useFonts({
        'HarimauDua': require('../../../assets/fonts/DK-Harimau-Dua.otf'),
        'ShantellSans-Light': require('../../../assets/fonts/ShantellSans-Light.ttf'),
        'ShantellSans-LightItalic': require('../../../assets/fonts/ShantellSans-LightItalic.ttf'),
        'ShantellSans-Regular': require('../../../assets/fonts/ShantellSans-Regular.ttf'),
        'ShantellSans-SemiBold': require('../../../assets/fonts/ShantellSans-SemiBold.ttf'),
        'ShantellSans-SemiBoldItalic': require('../../../assets/fonts/ShantellSans-SemiBoldItalic.ttf'),
        'ShantellSans-Bold': require('../../../assets/fonts/ShantellSans-Bold.ttf'),
        'ShantellSans-BoldItalic': require('../../../assets/fonts/ShantellSans-BoldItalic.ttf'),
        'ShantellSans-ExtraBold': require('../../../assets/fonts/ShantellSans-ExtraBold.ttf'),
        'ShantellSans-ExtraBoldItalic': require('../../../assets/fonts/ShantellSans-ExtraBoldItalic.ttf'),
        'ShantellSans-Italic': require('../../../assets/fonts/ShantellSans-Italic.ttf'),
        'ShantellSans-Medium': require('../../../assets/fonts/ShantellSans-Medium.ttf'),
        'ShantellSans-MediumItalic': require('../../../assets/fonts/ShantellSans-MediumItalic.ttf'),
        'Sahitya-Regular': require('../../../assets/fonts/Sahitya-Regular.ttf'),
        'Sahitya-Bold': require('../../../assets/fonts/Sahitya-Bold.ttf')
    });

    
    if (!fontsLoaded) {
        return <Text>Carregando...</Text>
    }

}

const font = StyleSheet.create({
    shantallSamsLight: {
        fontFamily: 'ShantellSans-Light'
    },
    shantallSamsLightItalic: {
        fontFamily: 'ShantellSans-LightItalic'
    },
    shantallSamsRegular: {
        fontFamily: 'ShantellSans-Regular'
    },
    shantallSamsSemiBold: {
        fontFamily: 'ShantellSans-SemiBold'
    },
    shantallSamsSemiBoldItalic: {
        fontFamily: 'ShantellSans-SemiBoldItalic'
    },
    shantallSamsBold: {
        fontFamily: 'ShantellSans-Bold'
    },
    sahityaBold: {
        fontFamily: 'Sahitya-Bold'
    }
})

export { font }
