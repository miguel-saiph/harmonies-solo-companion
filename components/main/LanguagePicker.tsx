import { View, StyleSheet, TouchableOpacity } from "react-native";
import { ThemedText } from "../ThemedText";
import { useEffect, useState } from "react";
import { useTaskContext } from "@/hooks/configContext";
import DataManager from "@/data/DataManager";
import { Languages } from "@/constants/Languages";

export function LanguagePicker() {
    const [langState, setLangState] = useState([] as boolean[]);
    const [config] = useState(useTaskContext());

    useEffect(() => {
        updateSelectedLang();
    }, [config]);

    const updateSelectedLang = (): void => {
        for (let i: number = 0; i < Object.keys(Languages).length; i++) {
            const langKey: string = Object.keys(Languages)[i];
            langState[i] = langKey === DataManager.instance.getCurrentLang();
        }
        setLangState([...langState]);
    }

    const onLangPressed = (langKey: string): void => {
        config.setLang(langKey);
        DataManager.instance.setCurrentLanguage(langKey);
        updateSelectedLang();
    }


    return (
        <View style={styles.container}>
            {Object.entries(Languages).map(([key, value], index) => {
                return (
                    <LangBtn 
                        key={key}
                        onPress={() => { onLangPressed(key) }} 
                        selectionState={langState[index]}
                        displayName={value}
                    />
                )

            })}
        </View>
    );
}

function LangBtn({ onPress, selectionState, displayName }: { onPress: Function, selectionState: boolean, displayName: string }) {
    return (
        <TouchableOpacity
            onPress={() => {
                onPress();
            }}>
            <ThemedText style={[styles.text, { textDecorationLine: selectionState === true ? 'underline' : 'none' }]}>
                {displayName}
            </ThemedText>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    text: {
        marginBottom: 5,
        fontSize: 20,
        fontFamily: 'VixarASCI',
        color: "black",
        textAlign: 'left',
        marginHorizontal: 10
    },
    bar: {
        alignSelf: 'flex-start'
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});