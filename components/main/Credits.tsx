import { View, StyleSheet, TouchableOpacity, Linking } from "react-native";
import { ThemedText } from "../ThemedText";
import { useState } from "react";
import { CustomModal } from "./Modal";
import localization from '@/data/Localization.json';
import { ILoc } from "./Info";
import { useTaskContext } from "@/hooks/configContext";

export function Credits() {
    const [modalVisible, setModalVisible] = useState(false);
    const lang = useTaskContext().lang;
    const texts: ILoc = localization;

    return (
        <View>
            <TouchableOpacity style={styles.credits}
                onPress={() => {
                    if (!modalVisible) {
                        setModalVisible(true);
                    }
                }}>
                <ThemedText style={[styles.modalText, { textDecorationLine: 'underline'}]}>
                    {texts.credits_title[lang]}
                </ThemedText>
            </TouchableOpacity>
            <CustomModal modalVisible={modalVisible} width={'90%'} onRequestClose={setModalVisible} children={
                <View>
                    <ThemedText style={[styles.modalText, styles.title]}>{texts.credits_title[lang]}</ThemedText>
                    <View style={{ flexDirection: 'row' }}>
                        <ThemedText style={styles.modalText}>{'\u2022'} {texts.credits_p1[lang]}</ThemedText>
                        <ThemedText style={[styles.modalText, { color: 'blue' }]} onPress={() => Linking.openURL('https://boardgamegeek.com/filepage/278347/melodies-solo-scenarios')}> Melodies </ThemedText>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <ThemedText style={styles.modalText}>{'\u2022'} {texts.credits_p2[lang]}</ThemedText>
                        <ThemedText style={[styles.modalText, { color: 'blue' }]} onPress={() => Linking.openURL('https://boardgamegeek.com/user/lovelace')}> Lovelace</ThemedText>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <ThemedText style={styles.modalText}>{'\u2022'} {texts.credits_p3[lang]}</ThemedText>
                        <ThemedText style={[styles.modalText, { color: 'blue' }]} onPress={() => Linking.openURL('https://boardgamegeek.com/user/Vimur')}> Vimur</ThemedText>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <ThemedText style={styles.modalText}>{'\u2022'} {texts.credits_p4[lang]}</ThemedText>
                        <ThemedText style={[styles.modalText, { color: 'blue' }]} onPress={() => Linking.openURL('https://www.libellud.com/')}> Libellud</ThemedText>
                    </View>
                </View>
            }>
            </CustomModal>
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        fontFamily: 'VixarASCI',
        fontSize: 30,
        color: '#000',
        paddingTop: 5,
        marginLeft: 10,
    },
    modalText: {
        marginBottom: 5,
        fontSize: 20,
        fontFamily: 'VixarASCI',
        color: "black",
        textAlign: 'left'
    },
    title: {
        textDecorationLine: 'underline',
        fontSize: 23
    },
    credits: {
        alignSelf: 'flex-end'
    }
});