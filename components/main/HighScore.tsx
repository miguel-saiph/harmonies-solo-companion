import { View, StyleSheet } from "react-native";
import { ThemedText } from "../ThemedText";
import { useTaskContext } from "@/hooks/configContext";
import { ILoc } from "./Info";
import localization from '@/data/Localization.json';

export function HighScore({value}: {value: number}) {
    const lang = useTaskContext().lang;
    const texts: ILoc = localization;

    return (
        <View style={{
            display: 'flex',
            flexDirection: 'row',
            marginTop: 10
        }}>
            <ThemedText style={styles.text}>
                {texts.highscore_label[lang]}:
            </ThemedText>
            <ThemedText style={styles.text}>
                {value}
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