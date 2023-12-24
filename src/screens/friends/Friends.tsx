import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ListItemComponent } from "../../components/list-item/ListItem";
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import { useFonts } from "expo-font";

export function FriendsScreen() {

    const [fontsLoaded] = useFonts({
        'HarimauDua': require('../../assets/fonts/DK-Harimau-Dua.otf'),
        'ShantellSans-Light': require('../../assets/fonts/ShantellSans-Light.ttf'),
        'Sahitya-Bold': require('../../assets/fonts/Sahitya-Bold.ttf')
    });

    if (!fontsLoaded) {
        return <Text>Carregando...</Text>
    }

    return (
            <View style={styles.container}>
                <Text style={styles.title}>Amigos</Text>
            </View>
            
            
    )
}

const font = StyleSheet.create({
    shantallSamsLight: {
        fontFamily: 'ShantellSans-Light'
    },
    sahityaBold: {
        fontFamily: 'Sahitya-Bold'
    }
})

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
    }
})