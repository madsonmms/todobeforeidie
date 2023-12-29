import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FriendsScreen } from "../screens/friends/Friends";

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ItemRoutes } from "./item-routes/item.routes";
import RulesScreen from "../screens/rules/Rules";


import { createDrawerNavigator } from "@react-navigation/drawer";
import AccountInfoScreen from "../screens/profile-options/AccountInfo";
import ProfileInfoScreen from "../screens/profile-options/ProfileInfo";

const { Screen, Navigator } = createBottomTabNavigator()
const Drawer = createDrawerNavigator()

export function MainAppRoutes() {

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
                <Screen name="Avatar" 
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
                >
                   {() => (
                    <Drawer.Navigator>
                        <Drawer.Screen name="Informações pessoais" component={AccountInfoScreen}>
                        </Drawer.Screen>
                        <Drawer.Screen name="Informações pessoais" component={ProfileInfoScreen}>
                        </Drawer.Screen>
                    </Drawer.Navigator>
                   )}
                </Screen>
            </Navigator>
        </>
    )
}


