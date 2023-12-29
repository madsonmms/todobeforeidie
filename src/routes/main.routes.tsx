import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FriendsScreen } from "../screens/friends/Friends";

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ItemRoutes } from "./item.routes";
import RulesScreen from "../screens/rules/Rules";

import { TouchableOpacity, View } from "react-native";
import { AccountStackRoutes } from "./account.routes";

const { Screen, Navigator } = createBottomTabNavigator()

const AvatarButtom = () => {
    return <View />
}

export function MainAppRoutes({ navigation }) {

    

    return (
        <>
            <Navigator screenOptions={{
                headerShown: false,
                tabBarLabel: () => { return null },
                tabBarStyle: {
                    padding: 0,
                    justifyContent: 'space-around'
                },
                tabBarItemStyle: {
                    margin: 0,
                    padding: 0,
                    justifyContent: 'space-around'
                }
            }}>
                <Screen name="ItemRoutes" component={ItemRoutes}
                    options={{
                        tabBarIcon: ({ size, color }) => (
                            <MaterialCommunityIcons name="notebook" size={size} color={color} />
                        )
                    }}
                />
                <Screen name="Friends" component={FriendsScreen}
                    options={{
                        tabBarIcon: ({ size, color }) => (
                            <MaterialCommunityIcons name="account-multiple" size={size} color={color} />
                        )
                    }}
                />
                <Screen name="Rules" component={RulesScreen}
                    options={{
                        tabBarIcon: ({ size, color }) => (
                            <MaterialCommunityIcons name="view-list" size={size} color={color} />
                        )
                    }}
                />
                <Screen name="AccountInfo" component={AccountStackRoutes}
                    options={{
                        tabBarIcon: ({ size, color }) => (
                            <MaterialCommunityIcons name="home" size={size} color={color} />
                        ),
                        
                    }}
                    listeners={({navigation})=> ({
                        tabPress: e => {
                            navigation.openDrawer()
                            e.preventDefault()
                        }
                    })}
                />
            </Navigator>
            {/* <TouchableOpacity
                style={{ position: 'absolute', right: 45, bottom: 10 }}
                onPress={
                    () => navigation.openDrawer()
                }>
                <MaterialCommunityIcons name="home" size={30} color={'black'} />
            </TouchableOpacity> */}
        </>
    )
}


