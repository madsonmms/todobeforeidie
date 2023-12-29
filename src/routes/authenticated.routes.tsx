import { createDrawerNavigator } from "@react-navigation/drawer";
import { MainAppRoutes } from "./main.routes";
import { AccountStackRoutes } from "./account.routes";

const Drawer = createDrawerNavigator();

export function AuthenticatedRoute() {

    return (
        <Drawer.Navigator initialRouteName="MainAppRoutes" screenOptions={{headerShown: false}}>
                <Drawer.Screen name="MainAppRoutes" component={MainAppRoutes} options={{
                    drawerItemStyle: {display: "none"}
                }}
                />
                <Drawer.Screen name="Informações pessoais" component={AccountStackRoutes} 
                />
        </Drawer.Navigator>
    )
}