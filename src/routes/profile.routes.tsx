
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfileInfoScreen from "../screens/profile-options/ProfileInfo";

const { Screen, Navigator } = createNativeStackNavigator();

export function ProfileRoute() {
    return (
            <Navigator initialRouteName="ProfileInfo" screenOptions={{headerShown: false}}>
                <Screen
                    name="ProfileInfo"
                    component={ProfileInfoScreen}
                />
            </Navigator>

    );
}
