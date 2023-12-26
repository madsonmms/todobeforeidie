
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-gesture-handler";

interface ButtonProps {
    title: string,
    placeholder: string,
}

export function InputComponent({ placeholder, title }: ButtonProps) {


    return (
        <TouchableOpacity>
            <Text style={styles.inputText}>{title}</Text>
            <TextInput style={styles.input} placeholder={placeholder} multiline={true} numberOfLines={4}></TextInput>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    input: {
        width: 300,
        margin: 0,
        padding: 0,
        borderBottomWidth: 1,
        borderStyle: 'solid',
        borderBottomColor: 'rgba(67, 71, 78, 0.20)',
        backgroundColor: '#FCFBF5',
        fontFamily: 'ShantellSans-Regular'
    },
    inputText: {
        fontFamily: 'ShantellSans-Regular',
        fontSize: 12,
        textAlign: 'left',
    }
})