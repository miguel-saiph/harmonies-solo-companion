import { TouchableOpacity, StyleSheet, Text } from "react-native";

export function CloseButton({ onRequestClose }: { onRequestClose: Function }) {
    return (
        <TouchableOpacity style={styles.button}
            onPress={() => {
                onRequestClose(false);
            }}>
            <Text style={styles.text} >X</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        width: 30,
        height: 30,
        borderRadius: 30,
        backgroundColor: '#ee6e73',
        position: 'absolute',
        top: 8,
        right: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontWeight: 'bold'
    }
});