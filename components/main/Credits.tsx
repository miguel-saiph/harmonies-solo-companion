import { View, StyleSheet, TouchableOpacity, Linking } from "react-native";
import { ThemedText } from "../ThemedText";
import { useState } from "react";
import { CustomModal } from "./Modal";

export function Credits() {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View>
            <TouchableOpacity style={styles.credits}
                onPress={() => {
                    if (!modalVisible) {
                        setModalVisible(true);
                    }
                }}>
                <ThemedText style={[styles.modalText, { textDecorationLine: 'underline'}]}>
                    Credits
                </ThemedText>
            </TouchableOpacity>
            <CustomModal modalVisible={modalVisible} width={'90%'} onRequestClose={setModalVisible} children={
                <View>
                    <ThemedText style={[styles.modalText, styles.title]}>Credits</ThemedText>
                    <View style={{ flexDirection: 'row' }}>
                        <ThemedText style={styles.modalText}>{'\u2022'} App based on the solo variant</ThemedText>
                        <ThemedText style={[styles.modalText, { color: 'blue' }]} onPress={() => Linking.openURL('https://boardgamegeek.com/filepage/278347/melodies-solo-scenarios')}> Melodies </ThemedText>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <ThemedText style={styles.modalText}>{'\u2022'} Scenarios and photos created by</ThemedText>
                        <ThemedText style={[styles.modalText, { color: 'blue' }]} onPress={() => Linking.openURL('https://boardgamegeek.com/user/lovelace')}> Lovelace</ThemedText>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <ThemedText style={styles.modalText}>{'\u2022'} App developed by</ThemedText>
                        <ThemedText style={[styles.modalText, { color: 'blue' }]} onPress={() => Linking.openURL('https://boardgamegeek.com/user/Vimur')}> Vimur</ThemedText>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <ThemedText style={styles.modalText}>{'\u2022'} Cards copyrighted by</ThemedText>
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