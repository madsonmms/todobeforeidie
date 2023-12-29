import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import { LikeComponent } from "../shared/Likes";
import { PrivacyComponent } from "../shared/ItemPrivacy";
import { ItemIconsComponent } from "../shared/ItemIcons";
import { useNavigation } from "@react-navigation/native";
import * as Fonts from '../../components/shared/fonts/Fonts';

interface ListItemProps {
    itemPublic: boolean,
    title: string,
    index: number,
    createdDate?: string,
    concluded: boolean,
    conclusionDate?: string
}


export function ListItemComponent({ index, itemPublic, title, createdDate, concluded, conclusionDate }: ListItemProps) {

    function checkPrivacy(itemPublic) {

        const isPrivate = itemPublic;

        if(isPrivate === true) {
            const privacy = 'public'
            return privacy
        } else {
            const privacy = 'private'
            return privacy
        }
    }
    
    const navigation = useNavigation();

    function navToSelectedItem() {
        navigation.navigate('CompleteItem', {
            screen: "SelectedItem",
            params: {id: index}
        })
    }

    const [fontsLoaded] = useFonts(Fonts.FontList);

    if (!fontsLoaded) {
        return <Text>Carregando...</Text>
    }

    if (concluded) {
        return (
            <TouchableOpacity style={styles.container} onPress={navToSelectedItem}>
                <View style={styles.likes}>
                    <LikeComponent likes={'10'}></LikeComponent>
                </View>
                <View style={styles.itemPrivacy}>
                    <PrivacyComponent privacy={checkPrivacy(itemPublic)}></PrivacyComponent>
                </View>
                <View style={styles.itemTypes}>
                    <ItemIconsComponent name={'travel'}></ItemIconsComponent>
                    <ItemIconsComponent name={'fun'}></ItemIconsComponent>
                </View>
                <View style={styles.itemInfo}>
                    <Text style={font.sahityaBold}>{index}-</Text><Text style={[font.shantallSamsLight, styles.itemTitle, styles.concluded]}>{title}</Text>
                </View>
                <View style={styles.itemDateAndAuthor}>
                    <View style={styles.itemDates}>
                        <View style={styles.date}>
                            <FontAwesome5 name="pencil-alt" size={15} color="#455059" />
                            <Text style={[font.sahityaBold, styles.datesInfo]}> Criado: <Text style={font.shantallSamsLight}>{createdDate}</Text></Text>
                        </View>
                        <View style={styles.date}>
                            <FontAwesome5 name="pencil-alt" size={15} color="#455059" />
                            <Text style={[font.sahityaBold, styles.datesInfo]}> Concluído: <Text style={font.shantallSamsLight}>{conclusionDate}</Text></Text>
                        </View>
                    </View>
                    <View style={styles.author}>
                        <Image style={styles.authorImage} source={require('../../assets/png/10.png')} />
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <TouchableOpacity style={styles.container} onPress={navToSelectedItem}>
            <View style={styles.likes}>
                <LikeComponent likes={'10'}></LikeComponent>
            </View>
            <View style={styles.itemPrivacy}>
                <PrivacyComponent privacy={checkPrivacy(itemPublic)}></PrivacyComponent>
            </View>
            <View style={styles.itemTypes}>
                <ItemIconsComponent name={'travel'}></ItemIconsComponent>
                <ItemIconsComponent name={'fun'}></ItemIconsComponent>
            </View>
            <View style={styles.itemInfo}>
                <Text style={font.sahityaBold}>{index}-</Text><Text style={[font.shantallSamsLight, styles.itemTitle]}>{title}</Text>
            </View>
            <View style={styles.itemDateAndAuthor}>
                <View style={styles.itemDates}>
                    <View style={styles.date}>
                        <FontAwesome5 name="pencil-alt" size={15} color="#455059" />
                        <Text style={[font.sahityaBold, styles.datesInfo]}> Criado: <Text style={font.shantallSamsLight}>{createdDate}</Text></Text>
                    </View>
                </View>
                <View style={styles.author}>
                    <Image style={styles.authorImage} source={require('../../assets/png/10.png')} />
                </View>
            </View>
        </TouchableOpacity>
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
        width: 372,
        height: 'auto',
        paddingVertical: 15,
        backgroundColor: "#FCFBF5",
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'rgba(112, 120, 124, 0.08)',
        borderRadius: 10,
        shadowOffset: { width: 4, height: 4 },
        elevation: 4,
        gap: 15
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
    itemDateAndAuthor: {
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
        height: 40,
        width: 40,
        backgroundColor: 'gray',
        borderRadius: 200
    },
    authorImage: {
        width: 40,
        height: 40
    }
});
