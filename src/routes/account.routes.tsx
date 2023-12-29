
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfileInfoScreen from "../screens/profile-options/ProfileInfo";
import AccountInfoScreen from "../screens/profile-options/AccountInfo";

const Stack = createNativeStackNavigator();

export function AccountStackRoutes() {
    return (
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen
                    name="AccountInfo"
                    component={AccountInfoScreen}
                />
                <Stack.Screen
                name="Profile"
                component={ProfileInfoScreen}
            />
            </Stack.Navigator>

    );
}
