import { View, StyleSheet, TouchableOpacity, Image, Modal } from "react-native";
import { ThemedText } from "../ThemedText";
import { useState } from "react";
import { CustomModal } from "./Modal";

export function Info() {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View>
            <TouchableOpacity
                activeOpacity={1}
                onPress={() => {
                    if (!modalVisible) {
                        setModalVisible(true);
                    }
                }}
            >
                <Image source={require('@/assets/images/information.png')} style={{
                    width: 30,
                    height: 30,
                }} />
            </TouchableOpacity>
            <CustomModal modalVisible={modalVisible} width={330} onRequestClose={setModalVisible} children={
                <View>
                    <ThemedText style={[styles.modalText, styles.title]}>General Rules</ThemedText>
                    <ThemedText style={styles.modalText}>The rules of the official solo mode apply with some modifications:</ThemedText>
                    <ThemedText style={styles.modalText}>{'\u2022'} You start each scenario with 3 cards. To qualify for victory, you must complete all three.</ThemedText>
                    <ThemedText style={styles.modalText}>{'\u2022'} Your fourth slot can be used as usual.</ThemedText>
                    <ThemedText style={styles.modalText}>{'\u2022'} There are three target scores for each scenario:</ThemedText>
                    <View style={{ alignItems: 'center' }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Image source={require('@/assets/images/medals/bronze-medal.png')} style={styles.medalIcon} />
                            <ThemedText style={styles.modalText}>Bronze (90+ points)</ThemedText>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Image source={require('@/assets/images/medals/silver-medal.png')} style={styles.medalIcon} />
                            <ThemedText style={styles.modalText}>Silver (110+ points)</ThemedText>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Image source={require('@/assets/images/medals/gold-medal.png')} style={styles.medalIcon} />
                            <ThemedText style={styles.modalText}>Gold (130+ points)</ThemedText>
                        </View>
                    </View>
                    <ThemedText style={styles.modalText}>{'\u2022'} You may use this optional action once per game:</ThemedText>
                    <View style={{ alignItems: 'center' }}>
                        <ThemedText style={styles.modalText}>Recycle. After you have drawn the 9 tokens, but before you have taken any of them you can set aside the 9 tokens, draw 9 more tokens and distribute them on the 3 spaces and then put the previous 9 tokens back into the pouch.</ThemedText>
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
    medalIcon: {
        width: 30,
        height: 30
    },
    title: {
        textDecorationLine: 'underline',
        fontSize: 23
    }
});