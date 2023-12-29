import { Image, StyleSheet, Text, View } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation, useRoute } from "@react-navigation/native";
import { ButtonComponent } from "../../../components/shared/Button";
import { ItemIconsComponent } from "../../../components/shared/ItemIcons";
import { PrivacyComponent } from "../../../components/shared/ItemPrivacy";
import { LikeComponent } from "../../../components/shared/Likes";
import { InputComponent } from "../../../components/shared/Input";
import * as Fonts from '../../../components/shared/fonts/Fonts';
import { ScrollView } from "react-native-gesture-handler";
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from "expo-font";
import { useCallback } from "react";
import { SafeAreaView } from "react-native-safe-area-context";


SplashScreen.preventAutoHideAsync();

type ParamsProps = {
    id: number;
}


export function CompletedInfoScreen(props) {

    const { id } = props.route.params as ParamsProps;

    //navigation
    const navigation = useNavigation();

    function navToBack() {
        navigation.goBack()
    }
    function navToStepOne() {
        navigation.navigate('StepOne', {id: id})
    }

    //fonts
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
        <SafeAreaView style={styles.container} onLayout={onLayoutRootView}>
            <ScrollView>
                <View style={styles.completedItem}>
                    <View style={styles.likes}>
                        <LikeComponent likes={'10'}></LikeComponent>
                    </View>
                    <View style={styles.itemPrivacy}>
                        <PrivacyComponent privacy={'public'}></PrivacyComponent>
                    </View>
                    <View style={styles.screenHeader}>
                        <Text style={{ fontFamily: Fonts.ShantallSamsFamily.Bold }}>Concluir item</Text>
                    </View>
                    <View style={styles.itemTypes}>
                        <ItemIconsComponent name={'travel'}></ItemIconsComponent>
                        <ItemIconsComponent name={'fun'}></ItemIconsComponent>
                    </View>
                    <View style={styles.itemInfo}>
                        <Text style={{ fontFamily: Fonts.SahityaFamily.Bold }}>{id} -</Text><Text style={[{ fontFamily: Fonts.ShantallSamsFamily.Regular }, styles.itemTitle, styles.concluded]}>
                            Fazer uma grande viagem
                        </Text>
                    </View>
                    <View style={styles.itemDates}>
                        <View style={styles.date}>
                            <FontAwesome5 name="pencil-alt" size={15} color="#455059" />
                            <Text style={[{ fontFamily: Fonts.SahityaFamily.Bold }, styles.datesInfo]}> Criado: <Text style={{ fontFamily: Fonts.ShantallSamsFamily.Light }}>10-10-2023</Text></Text>
                        </View>
                        <View style={styles.date}>
                            <FontAwesome5 name="pencil-alt" size={15} color="#455059" />
                            <Text style={[{ fontFamily: Fonts.SahityaFamily.Bold }, styles.datesInfo]}> Concluído: <Text style={{ fontFamily: Fonts.ShantallSamsFamily.Light }}>10-10-2023 *</Text></Text>
                        </View>
                        <Text style={[{ fontFamily: Fonts.ShantallSamsFamily.Bold }, { textAlign: 'center', width: 226, fontSize: 12 }]}>
                            *Finalize o formulário para salvar esta data de conclusão
                        </Text>
                    </View>
                    <View style={styles.messageWrap}>
                        <Text style={[{ fontFamily: Fonts.ShantallSamsFamily.Regular }, { textAlign: 'center', width: 226 }]}>
                            Parabéns por concluir mais um item da sua lista! =D
                        </Text>
                    </View>
                    <View style={styles.author}>
                        <Image style={styles.authorImage} source={require('../../../assets/png/10.png')} />
                        <View style={styles.authorName}>
                            <Text style={{ fontFamily: Fonts.SahityaFamily.Bold }}>Item por:</Text>
                            <Text style={{ fontFamily: Fonts.ShantallSamsFamily.Light }}>Madson Martins</Text>
                        </View>
                    </View>
                    <View style={styles.itemOptions}>
                        <ButtonComponent title={'Próximo'} navigate={navToStepOne}></ButtonComponent>
                        <ButtonComponent title={'Voltar'} type={'secondary'} navigate={navToBack}></ButtonComponent>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#FCFBF5",
    },
    screenHeader: {
        alignItems: 'center',
    },
    messageWrap: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    form: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    completedItem: {
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
        gap: 40
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
    itemDates: {
        flexDirection: 'column',
        alignItems: 'center',
        paddingHorizontal: 30,
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
