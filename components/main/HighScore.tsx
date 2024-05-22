import { View, StyleSheet } from "react-native";
import { ThemedText } from "../ThemedText";

export function HighScore() {
    return (
        <View style={{
            display: 'flex',
            flexDirection: 'row',
            marginTop: 10
        }}>
            <ThemedText style={styles.text}>
                Highscore:
            </ThemedText>
            <ThemedText style={styles.text}>
                130
            </ThemedText>
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        // marginTop: -6,
        fontFamily: 'VixarASCI',
        fontSize: 30,
        color: '#000',
        // paddingTop: 25,
        paddingTop: 5,
        marginLeft: 10,
        // textAlign: 'left',
    },
});