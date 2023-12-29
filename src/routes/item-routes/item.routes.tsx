
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ItemsListScreen } from "../../screens/items-list";
import { CompleteItemStackRoute } from "./item-completed.routes";

const { Screen, Navigator } = createNativeStackNavigator();

export function ItemRoutes() {
    return (
            <Navigator initialRouteName="index" screenOptions={{headerShown: false}}>
                <Screen
                    name="index"
                    component={ItemsListScreen}
                />
                <Screen
                    name="CompleteItem"
                    component={CompleteItemStackRoute}
                />
            </Navigator>

    );
}
