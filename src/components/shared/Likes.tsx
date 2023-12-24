import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { FontAwesome } from '@expo/vector-icons';

export function LikeComponent({likes}){
    return(
        <TouchableOpacity style={styles.likes}>
                <FontAwesome name="heart" size={10} color="#B7C0C7" />
                <Text style={styles.likes}>{likes}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    likes: {
        flexDirection: 'row',
        alignItems: 'center',
        fontFamily: 'ShantellSans-Light',
        color: '#B7C0C7',
        gap: 6,
    }
})