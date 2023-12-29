import { createDrawerNavigator } from "@react-navigation/drawer";
import { MainAppRoutes } from "./main.routes";
import AccountInfoScreen from "../screens/profile-options/AccountInfo";
import ProfileInfoScreen from "../screens/profile-options/ProfileInfo";

const Drawer = createDrawerNavigator();

export function AuthenticatedRoute() {

    return (
        <Drawer.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
                <Drawer.Screen name="Home" component={MainAppRoutes}
                />
                <Drawer.Screen 
                    name="Informações pessoais" component={AccountInfoScreen} 
                />
                <Drawer.Screen 
                    name="Alterar senha" component={ProfileInfoScreen} 
                />
        </Drawer.Navigator>
    )
}