import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FriendsScreen } from "../screens/friends/Friends";

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ItemRoutes } from "./item.routes";
import RulesScreen from "../screens/rules/Rules";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { DrawerActions } from "@react-navigation/native";

const { Screen, Navigator } = createBottomTabNavigator()

const Drawer = createDrawerNavigator();

export function ProfileRoutes() {
    return (
        <Drawer.Navigator initialRouteName="UserRoutes" screenOptions={{headerShown: false}}>
                <Drawer.Screen name="drawer" component={UserRoutes} options={{
                    drawerItemStyle: {display: "none"}
                }}
                />
                <Drawer.Screen name="ItemList" component={UserRoutes} 
                />
        </Drawer.Navigator>
    )
}

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
                <Screen name="Profile" component={ItemRoutes} 
                options={{
                    tabBarIcon: ({size, color})=>(
                        <MaterialCommunityIcons name="home" size={size} color={color} />
                    )
                }}
                listeners={({ navigation }) => ({
                    tabPress: e => {            
                      e.preventDefault()
                      navigation.openDrawer()
                    }
                  })}
                  
                />
        </Navigator>
    )
}


