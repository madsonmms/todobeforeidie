
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SelectedItemScreen } from "../screens/selected-item/SelectedItem";
import { ItemsListScreen } from "../screens/items-list/ItemsList";
import { DoneItem } from "../screens/done-item/DoneItem";

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
                <Screen
                    name="DoneItem"
                    component={DoneItem}
                />
            </Navigator>

    );
}
