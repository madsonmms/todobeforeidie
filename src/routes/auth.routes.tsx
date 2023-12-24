
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/home/Home";
import { UserRoutes } from "./user.routes";

const { Screen, Navigator } = createNativeStackNavigator();

export function AuthRoutes() {
    return (
            <Navigator screenOptions={{headerShown: false}}>
                <Screen
                    name="Home"
                    component={HomeScreen}
                />
                <Screen
                    name="UserRoutes"
                    component={UserRoutes}
                />
            </Navigator>

    );
}