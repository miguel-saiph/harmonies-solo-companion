import { View, StyleSheet, TouchableOpacity, Image, Modal } from "react-native";
import { ThemedText } from "../ThemedText";
import { useEffect, useState } from "react";
import { CustomModal } from "./Modal";
import { Credits } from "./Credits";
import { LanguagePicker } from "./LanguagePicker";
import { useTaskContext } from "@/hooks/configContext";
import localization from '@/data/Localization.json';

export interface ILoc {
    [key: string]: {
        [lang: string]: string
    }
}

export function Info() {
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
                <Image source={require('@/assets/images/information.png')} style={{
                    width: 30,
                    height: 30,
                }} />
            </TouchableOpacity>
            <CustomModal modalVisible={modalVisible} width={'90%'} onRequestClose={setModalVisible} children={
                <View>
                    <ThemedText style={[styles.modalText, styles.title]}>{texts.info_title[lang]} </ThemedText>
                    <ThemedText style={styles.modalText}> {texts.info_p1[lang]} </ThemedText>
                    <ThemedText style={styles.modalText}>{'\u2022'} {texts.info_p2[lang]} </ThemedText>
                    <ThemedText style={styles.modalText}>{'\u2022'} {texts.info_p3[lang]}</ThemedText>
                    <ThemedText style={styles.modalText}>{'\u2022'} {texts.info_p4[lang]} </ThemedText>
                    <View style={{ alignItems: 'center' }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Image source={require('@/assets/images/medals/bronze-medal.png')} style={styles.medalIcon} />
                            <ThemedText style={styles.modalText}>{texts.info_bronze[lang]} (90+ {texts.info_points[lang]})</ThemedText>
                            <Image source={require('@/assets/images/medals/silver-medal.png')} style={styles.medalIcon} />
                            <ThemedText style={styles.modalText}>{texts.info_silver[lang]} (110+ {texts.info_points[lang]})</ThemedText>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Image source={require('@/assets/images/medals/gold-medal.png')} style={styles.medalIcon} />
                            <ThemedText style={styles.modalText}>{texts.info_gold[lang]} (130+ {texts.info_points[lang]})</ThemedText>
                        </View>
                    </View>
                    <ThemedText style={styles.modalText}>{'\u2022'} {texts.info_optional[lang]}</ThemedText>
                    <View style={{}}>
                        <View style={{ flexDirection: 'row' }}>
                            <ThemedText style={styles.modalText}>{texts.info_recycle[lang]} </ThemedText>
                            <Image source={require('@/assets/images/recycle.png')} style={styles.medalIcon} />
                        </View>
                        <ThemedText style={styles.modalText}>
                        {texts.info_recycle_desc[lang]}
                        </ThemedText>
                    </View>
                    <View style={styles.bottomContainer}>
                        <LanguagePicker/>
                        <Credits/>
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
    recycleIcon: {
        width: 30,
        height: 30
    },
    title: {
        textDecorationLine: 'underline',
        fontSize: 23
    },
    bottomContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
});