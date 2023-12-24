import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FriendsScreen } from "../screens/friends/Friends";

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ItemRoutes } from "./item.routes";
import RulesScreen from "../screens/rules/Rules";
import { ProfileRoutes } from "./profile.routes";

const { Screen, Navigator } = createBottomTabNavigator()

export function UserRoutes() {
    return (
        <Navigator screenOptions={{headerShown: false, tabBarLabel: () => {return null}}}>
                <Screen name="ItemList" component={ItemRoutes} 
                options={{
                    tabBarIcon: ({size, color})=>(
                        <MaterialCommunityIcons name="notebook" size={size} color={color} />
                    )
                }}
                />
                <Screen name="Friends" component={FriendsScreen} 
                options={{
                    tabBarIcon: ({size, color})=>(
                        <MaterialCommunityIcons name="account-multiple" size={size} color={color} />
                    )
                }}
                />
                <Screen name="Rules" component={RulesScreen} 
                options={{
                    tabBarIcon: ({size, color})=>(
                        <MaterialCommunityIcons name="view-list" size={size} color={color} />
                    )
                }}
                />
                <Screen name="Profile" component={ProfileRoutes} 
                options={{
                    tabBarIcon: ({size, color})=>(
                        <MaterialCommunityIcons name="home" size={size} color={color} />
                    )
                }}
                />
        </Navigator>
    )
}