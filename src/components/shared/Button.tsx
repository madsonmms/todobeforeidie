
import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface ButtonProps {
    title: string,
    type?: 'primary' | 'secondary',
    navigate?(): any
}

export function ButtonComponent({ title, type, navigate }: ButtonProps) {

    if(type === undefined) {
        type = 'primary';
    }

    return (
        <TouchableOpacity style={[styles.button,
        (type === "primary") ? styles.primaryButton : styles.secondaryButton
        ]}
            onPress={navigate}>
            <Text style={[styles.buttonText,
            (type === "primary") ? styles.primaryButtonText : styles.secondaryButtonText
            ]}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        width: 200,
        height: 40,
        justifyContent: 'center',
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 100,
        backgroundColor: '#FCFBF5',
    },
    primaryButton: {
        backgroundColor: '#FCFBF5',
        borderColor: '#455059',
    },
    primaryButtonText: {
        color: '#455059',
    },
    secondaryButton: {
        borderColor: '#B7C0C7',
    },
    secondaryButtonText: {
        color: '#B7C0C7',
    },
    buttonText: {
        fontFamily: 'HarimauDua',
        fontSize: 14,
        textAlign: 'center',
    }
})