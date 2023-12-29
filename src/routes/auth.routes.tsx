
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/home/Home";
import { AuthenticatedRoute } from "./authenticated.routes";

const { Screen, Navigator } = createNativeStackNavigator();

export function AuthRoutes() {
    return (
            <Navigator screenOptions={{headerShown: false}}>
                <Screen
                    name="Home"
                    component={HomeScreen}
                />
                <Screen
                    name="AuthenticatedRoute"
                    component={AuthenticatedRoute}
                />
            </Navigator>

    );
}
