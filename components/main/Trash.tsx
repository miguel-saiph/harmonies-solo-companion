import { View, StyleSheet, TouchableOpacity, Image, Modal } from "react-native";
import { ThemedText } from "../ThemedText";
import { useEffect, useState } from "react";
import { CustomModal } from "./Modal";
import { useTaskContext } from "@/hooks/configContext";
import localization from '@/data/Localization.json';

export interface ILoc {
    [key: string]: {
        [lang: string]: string
    }
}

export function Trash({ onResetScore }: { onResetScore: Function }) {
    const [modalVisible, setModalVisible] = useState(false);
    // const [lang, setLang] = useState(useTaskContext());
    const lang = useTaskContext().lang;
    const texts: ILoc = localization;

    useEffect(() => {
    }, [lang]);

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
                <Image source={require('@/assets/images/trash.png')} style={{
                    width: 30,
                    height: 30,
                }} />
            </TouchableOpacity>
            <CustomModal modalVisible={modalVisible} width={'75%'} height={'32%'} onRequestClose={setModalVisible} children={
                <View style={{ flex: 2 }}>
                    <ThemedText adjustsFontSizeToFit={true} numberOfLines={2} style={[styles.modalText]}>{texts.trash_confirmation[lang]} </ThemedText>
                    <View style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        flex: 1
                    }}>
                        <TouchableOpacity
                            activeOpacity={1}
                            onPress={() => {
                                onResetScore();
                                if (modalVisible) {
                                    setModalVisible(false);
                                }
                            }}
                            style={styles.inputButton}
                        >
                            <ThemedText style={styles.appButtonText} >Ok</ThemedText>
                        </TouchableOpacity>
                    </View>
                </View>
            }>
            </CustomModal>
        </View>
    );
}

const styles = StyleSheet.create({
    modalText: {
        // marginBottom: 2,
        fontSize: 30,
        fontFamily: 'VixarASCI',
        color: "black",
        textAlign: 'center'
    },
    inputButton: {
        backgroundColor: "#009688",
        width: 50,
        borderRadius: 360,
        paddingVertical: 10,
        paddingHorizontal: 10,
        marginTop: 10,
    },
    appButtonText: {
        fontFamily: 'VixarASCI',
        fontSize: 24,
        color: "#fff",
        alignSelf: "center",
        textTransform: "uppercase"
    },
});