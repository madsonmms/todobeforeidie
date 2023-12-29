
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CompletedFormStepOne } from "../../screens/items-list/completed/CompletedStepOne";
import { CompletedInfoScreen } from "../../screens/items-list/completed/CompletedItemInfo";
import { SelectedItemScreen } from "../../screens/items-list/SelectedItem";

const { Screen, Navigator } = createNativeStackNavigator();

export function CompleteItemStackRoute() {
    return (
            <Navigator initialRouteName="SelectedItem" screenOptions={{headerShown: false}}>
                <Screen
                    name="SelectedItem"
                    component={SelectedItemScreen}
                />
                <Screen
                    name="CompletedItemInfo"
                    component={CompletedInfoScreen}
                />
                <Screen
                    name="StepOne"
                    component={CompletedFormStepOne}
                />
            </Navigator>

    );
}
