
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SelectedItemScreen } from "../screens/selected-item/SelectedItem";
import { ItemsListScreen } from "../screens/items-list/ItemsList";

const { Screen, Navigator } = createNativeStackNavigator();

export function ItemRoutes() {
    return (
            <Navigator screenOptions={{headerShown: false}}>
                <Screen
                    name="ItemList"
                    component={ItemsListScreen}
                />
                <Screen
                    name="SelectedItem"
                    component={SelectedItemScreen}
                />
            </Navigator>

    );
}
