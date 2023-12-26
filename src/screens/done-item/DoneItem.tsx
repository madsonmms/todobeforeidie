import { Image, StyleSheet, Text, View } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation, useRoute } from "@react-navigation/native";
import { ButtonComponent } from "../../components/shared/Button";
import { ItemIconsComponent } from "../../components/shared/ItemIcons";
import { PrivacyComponent } from "../../components/shared/ItemPrivacy";
import { LikeComponent } from "../../components/shared/Likes";
import { InputComponent } from "../../components/shared/Input";
import { FontsLoad, font } from "../../components/shared/styles/Fonts";

type ParamsProps = {
    id: number;
}

export function DoneItem() {

    FontsLoad();

    const navigation = useNavigation();

    function navToBack() {
        navigation.goBack()
    }

    function navToDone() {
        navigation.navigate('DoneItem')
    }

    const route = useRoute();
    const { id } = route.params as ParamsProps;

    

    return (
        <View style={styles.container}>
            <View style={styles.doneItem}>
                <View style={styles.likes}>
                    <LikeComponent likes={'10'}></LikeComponent>
                </View>
                <View style={styles.itemPrivacy}>
                    <PrivacyComponent privacy={'public'}></PrivacyComponent>
                </View>
                <View style={styles.screenHeader}>
                    <Text>Concluir item</Text>
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
                <View style={styles.messageWrap}>
                    <Text style={[font.shantallSamsRegular, {textAlign: 'center', width: 226}]}>
                        Parabéns por concluir mais um item da sua lista =D
                    </Text>
                </View>
                <View>
                <View style={styles.messageWrap}>
                    <Text style={[font.shantallSamsRegular, {textAlign: 'center', width: 'auto'}]}>
                        Se quiser fale mais sobre sua experiência!
                    </Text>
                </View>
                <View style={styles.form}>
                    <InputComponent title={'Comentário'} placeholder={'Ex. Viagem para Londres e vi o Big Bang com meus próprios olhos!'}></InputComponent>
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
                    <ButtonComponent title={'Concluir!'} navigate={navToDone}></ButtonComponent>
                    <ButtonComponent title={'Voltar'} type={'secondary'} navigate={navToBack}></ButtonComponent>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
    doneItem: {
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
