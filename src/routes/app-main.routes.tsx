import { createDrawerNavigator } from "@react-navigation/drawer";
import { UserRoutes } from "./user.routes";
import { ProfileRoute } from "./profile.routes";


const {Screen, Navigator} = createDrawerNavigator();

export function AppMainRoute() {
    return (
        <Navigator initialRouteName="UserRoutes" screenOptions={{headerShown: false}}>
                <Screen name="UserRoutes" component={UserRoutes} options={{
                    drawerItemStyle: {display: "none"}
                }}
                />
                <Screen name="Informações pessoais" component={ProfileRoute} 
                />
        </Navigator>
    )
}