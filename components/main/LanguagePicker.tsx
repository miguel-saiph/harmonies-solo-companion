import { View, StyleSheet, TouchableOpacity } from "react-native";
import { ThemedText } from "../ThemedText";
import { useEffect, useState } from "react";
import { useTaskContext } from "@/hooks/configContext";
import DataManager from "@/data/DataManager";

export function LanguagePicker() {
    const [enSelected, setEnSelected] = useState(true);
    const [config] = useState(useTaskContext());

    useEffect(() => {
        setEnSelected(config.lang === 'en');
    }, [config]);

    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => {
                    config.setLang('en');
                    DataManager.instance.setCurrentLanguage('en');
                    setEnSelected(true);
                }}>
                <ThemedText style={[styles.text, {textDecorationLine: enSelected ? 'underline' : 'none'}]}>
                    EN
                </ThemedText>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => {
                    config.setLang('es');
                    DataManager.instance.setCurrentLanguage('es');
                    setEnSelected(false);
                }}>
                <ThemedText style={[styles.text, {textDecorationLine: enSelected ? 'none' : 'underline'}]}>
                    ES
                </ThemedText>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => {
                    config.setLang('zh-CN');
                    DataManager.instance.setCurrentLanguage('zh-CN');
                    setEnSelected(false);
                }}>
                <ThemedText style={[styles.text, {textDecorationLine: enSelected ? 'none' : 'underline'}]}>
                    中文
                </ThemedText>
            </TouchableOpacity>
        </View>
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