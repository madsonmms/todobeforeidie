import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';
import { useFonts } from "expo-font";
import { useNavigation, useRoute } from "@react-navigation/native";
import { ButtonComponent } from "../../components/shared/Button";
import { ItemIconsComponent } from "../../components/shared/ItemIcons";
import { PrivacyComponent } from "../../components/shared/ItemPrivacy";
import { LikeComponent } from "../../components/shared/Likes";
import { useCallback } from "react";
import * as Fonts from '../../components/shared/fonts/Fonts'
import * as SplashScreen from 'expo-splash-screen'

type ParamsProps = {
    id: number;
}

export function SelectedItemScreen() {

    const route = useRoute();
    const { id } = route.params as ParamsProps;

    const navigation = useNavigation();

    function navToBack() {
        navigation.goBack()
    }

    function navToCompleted() {
        navigation.navigate('CompletedItemInfo', {id: id})
    }

    //FontLoader
    const [fontsLoaded, fontError] = useFonts(Fonts.FontList);

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded || fontError) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded, fontError]);

    if (!fontsLoaded && !fontError) {
        return <Text>Carregando...</Text>;
    }

    return (
        <View style={styles.container} onLayout={onLayoutRootView}>
            <View style={styles.selectedItem}>
                <View style={styles.likes}>
                    <LikeComponent likes={'10'}></LikeComponent>
                </View>
                <View style={styles.itemPrivacy}>
                    <PrivacyComponent privacy={'public'}></PrivacyComponent>
                </View>
                <View style={styles.itemTypes}>
                    <ItemIconsComponent name={'travel'}></ItemIconsComponent>
                    <ItemIconsComponent name={'fun'}></ItemIconsComponent>
                </View>
                <View style={styles.itemInfo}>
                    <Text style={font.sahityaBold}>{id}-</Text><Text style={[font.shantallSamsLight, styles.itemTitle, styles.concluded]}>
                        Fazer uma grande viagem
                    </Text>
                </View>
                <View style={styles.itemDatesWrap}>
                    <View style={styles.itemDates}>
                        <View style={styles.date}>
                            <FontAwesome5 name="pencil-alt" size={15} color="#455059" />
                            <Text style={[font.sahityaBold, styles.datesInfo]}> Criado: <Text style={font.shantallSamsLight}>10-10-2023</Text></Text>
                        </View>
                        <View style={styles.date}>
                            <FontAwesome5 name="pencil-alt" size={15} color="#455059" />
                            <Text style={[font.sahityaBold, styles.datesInfo]}> Concluído: <Text style={font.shantallSamsLight}>10-10-2023</Text></Text>
                        </View>
                    </View>
                </View>
                <View style={styles.author}>
                    <Image style={styles.authorImage} source={require('../../assets/png/10.png')} />
                    <View style={styles.authorName}>
                        <Text style={font.sahityaBold}>Item por:</Text>
                        <Text style={font.shantallSamsLight}>Madson Martins</Text>
                    </View>
                </View>
                <View style={styles.itemOptions}>
                    <ButtonComponent title={'Concluir!'} navigate={navToCompleted}></ButtonComponent>
                    <ButtonComponent title={'Voltar'} type={'secondary'} navigate={navToBack}></ButtonComponent>
                </View>
            </View>
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
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#FCFBF5",
    },
    selectedItem: {
        width: 372,
        height: 'auto',
        paddingVertical: 20,
        backgroundColor: "#FCFBF5",
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'rgba(112, 120, 124, 0.08)',
        borderRadius: 10,
        shadowOffset: { width: 4, height: 4 },
        elevation: 4,
        gap: 15
    },
    itemOptions: {
        alignItems: 'center',
        gap: 10
    },
    itemTypes: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 5
    },
    concluded: {
        textDecorationLine: 'line-through'
    },
    itemTitle: {
        width: 226,
        textAlign: 'center',
    },
    itemInfo: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 5
    },
    likes: {
        position: 'absolute',
        top: 7,
        left: 10,
    },
    itemPrivacy: {
        position: 'absolute',
        top: 7,
        right: 10,
    },
    itemDatesWrap: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 30,
    },
    itemDates: {
        paddingVertical: 10,
        gap: 10
    },
    date: {
        flexDirection: 'row'
    },
    datesInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        fontSize: 12
    },
    author: {
        alignItems: 'center',
        borderRadius: 200,
        gap: 15
    },
    authorName: {
        alignItems: 'center',
    },
    authorImage: {
        width: 40,
        height: 40
    }
});
