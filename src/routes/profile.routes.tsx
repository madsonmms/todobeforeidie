import { createDrawerNavigator } from "@react-navigation/drawer";
import { FriendsScreen } from "../screens/friends/Friends";


const { Screen, Navigator } = createDrawerNavigator()

export function ProfileRoutes() {
    return (
        <Navigator screenOptions={{headerShown: false}}>
                
                <Screen name="Friends" component={FriendsScreen} 
                />
        </Navigator>
    )
}