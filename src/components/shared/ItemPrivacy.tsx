import { TouchableOpacity } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';

interface PrivacyProps {
    privacy: 'public' | 'private';
}

export function PrivacyComponent({privacy}:PrivacyProps){

    if(privacy == 'public') {
        return(
            <TouchableOpacity>
                    <FontAwesome5 name="lock-open" size={10} color="#B7C0C7" />
            </TouchableOpacity>
        )
    } else {
        return(
            <TouchableOpacity>
                    <FontAwesome5 name="lock" size={10} color="#B7C0C7" />
            </TouchableOpacity>
        )
    }

    
}
