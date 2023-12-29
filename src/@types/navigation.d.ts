import { NonUndefined } from './../../node_modules/react-hook-form/dist/types/utils.d';
export declare global {
    namespace ReactNavigation {
        interface RootParamList {
            Home: undefined;
            Avatar: undefined;
            AuthenticatedRoute: undefined;
            Friends: undefined;
            Rules: undefined;
            Profile: undefined;
            SelectedItem: {id:number}
            CompleteItem: {
                screen: string,
                params: {
                    id: number
                }
            }
            CompletedItemInfo: {
                id: number
            },
            StepOne: {
                id: number
            },
            
        }
    }
}