//default
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";

//components
import { ListItemComponent } from "../../components/list-item/ListItem";

//icons
import { FontAwesome5 } from '@expo/vector-icons';

//fonts
import { useFonts } from "expo-font";
import * as Fonts from '../../components/shared/fonts/Fonts'
import { useCallback } from "react";

//SplashScreen
import * as SplashScreen from 'expo-splash-screen'


//To Flatlist
type ItemData =
    {
        itemPublic: true | false,
        title: string,
        index: number,
        createdDate: string,
        concludedDate?: string,
        concluded: boolean,

    }

const DATA: ItemData[] = [
    {
        itemPublic: true,
        title: 'Fazer uma viagem grande',
        index: 1,
        createdDate: '10-01-2023',
        concludedDate: '11-01-2023',
        concluded: true,
    },
    {
        itemPublic: false,
        title: 'Comer algo diferente',
        index: 2,
        createdDate: '10-01-2023',
        concluded: false,
    },
    {
        itemPublic: true,
        title: 'Ir aos alpes suiços',
        index: 3,
        createdDate: '10-01-2023',
        concluded: false,
    },
    {
        itemPublic: true,
        title: 'Ir aos alpes suiços',
        index: 4,
        createdDate: '10-01-2023',
        concluded: false,
    },
    {
        itemPublic: true,
        title: 'Ir aos alpes suiços',
        index: 5,
        createdDate: '10-01-2023',
        concluded: false,
    },
    {
        itemPublic: true,
        title: 'Ir aos alpes suiços',
        index: 6,
        createdDate: '10-01-2023',
        concluded: false,
    },
    {
        itemPublic: true,
        title: 'Ir aos alpes suiços',
        index: 7,
        createdDate: '10-01-2023',
        concluded: false,
    },
];

type itemProps = {
    item: ItemData;
}

const Item = ({ item }: itemProps) => {

    return (
        <ListItemComponent
            itemPublic={item.itemPublic}
            index={item.index}
            title={item.title}
            createdDate={item.createdDate}
            conclusionDate={item.concludedDate}
            concluded={item.concluded}
        />
    )
}

//Screen
export function ItemsListScreen() {

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

    //FlatList Render
    const renderItem = ({ item }: { item: ItemData }) => {
        return (
            <Item item={item}></Item>
        )
    }

    //Render
    return (
        <View style={styles.container}>
            <View style={styles.options}>
                <View style={styles.filters}>
                    <TouchableOpacity>
                        <FontAwesome5 name="search" size={20} color='#BFC8CC' />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            width: 30,
                            height: 30,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderWidth: 1,
                            borderRadius: 100,
                            borderColor: 'black',
                        }}
                    >
                        <FontAwesome5
                            name="filter"
                            size={15}
                            color="black" />
                    </TouchableOpacity>
                </View>
            </View>
            <FlatList
                data={DATA}
                renderItem={(
                    renderItem
                )}
                ItemSeparatorComponent={
                    ()=>(
                    <View style={styles.separator}>
                    </View>
                    )
                }
                style={styles.itemListContainer}
                onLayout={onLayoutRootView}>
            </FlatList>
            <TouchableOpacity style={styles.addButton}>
                <FontAwesome5 name="plus" size={14} color='#455059' style={styles.addButtonIcon} />
                <Text style={[{fontFamily: Fonts.ShantallSamsFamily.Light}, styles.addButtonText]}>Adicionar um item</Text>
            </TouchableOpacity>
        </View>
    )
}

//LocalStyles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 60,
        paddingBottom: 20,
        alignItems: 'center',
        backgroundColor: '#FCFBF5',
    },
    addButton: {
        width: 372,
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 75,
        backgroundColor: "#FCFBF5",
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'rgba(112, 120, 124, 0.08)',
        borderRadius: 10,
        shadowOffset: { width: 4, height: 4 },
        elevation: 4,
    },
    addButtonIcon: {
        position: "absolute",
        left: 75,
    },
    addButtonText: {
        textAlign: 'center',
        fontSize: 16,
    },
    options: {
        width: 347,
        height: 30,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    filters: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
    },
    separator: {
        paddingVertical: 5,
    },
    itemListContainer: {
        marginVertical: 15,
        paddingHorizontal: 15,
        gap: 15
    },
});
