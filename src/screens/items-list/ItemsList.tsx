import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ListItemComponent } from "../../components/list-item/ListItem";
import { FontAwesome5 } from '@expo/vector-icons';
import { useFonts } from "expo-font";

export function ItemsListScreen() {

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
                <ScrollView contentContainerStyle={styles.itemsListScroll} style={styles.itemListContainer}>
                    <ListItemComponent
                        itemPublic={true}
                        index={1}
                        title={'Fazer uma viagem grande'}
                        createdDate="10-01-2023"
                        concluded={false}
                    />
                    <ListItemComponent
                        itemPublic={true}
                        index={2}
                        title={'Comer algo diferente'}
                        createdDate="10-01-2023"
                        concluded={false}
                    />
                    <ListItemComponent
                        itemPublic={false}
                        index={3}
                        title={'Ir aos alpes suiços'}
                        createdDate="10-01-2023"
                        concluded={true}
                    />
                    <ListItemComponent
                        itemPublic={false}
                        index={4}
                        title={'Ir aos alpes suiços'}
                        createdDate="10-01-2023"
                        concluded={true}
                    />
                    <ListItemComponent
                        itemPublic={false}
                        index={5}
                        title={'Ir aos alpes suiços'}
                        createdDate="10-01-2023"
                        concluded={true}
                    />
                </ScrollView>
                <TouchableOpacity style={styles.addButton}>
                    <FontAwesome5 name="plus" size={14} color='#455059' style={styles.addButtonIcon} />
                    <Text style={[font.shantallSamsLight, styles.addButtonText]}>Adicionar um item</Text>
                </TouchableOpacity>              
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
    itemListContainer: {
        marginVertical: 15,
        paddingHorizontal: 15,
    },
    itemsListScroll: {
        paddingBottom: 15,
        gap: 15,
    }
});
