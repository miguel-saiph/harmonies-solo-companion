// Calculator.tsx

import { View, StyleSheet, TouchableOpacity, Image, TextInput } from "react-native";
import { ThemedText } from "../ThemedText";
import { useEffect, useState } from "react";
import { CustomModal } from "./Modal";
import React from "react";
import localization from '@/data/Localization.json';
import { ILoc } from "./Info";
import { useTaskContext } from "@/hooks/configContext";

export function Calculator({ onScoreSubmitted, updateScore }: { onScoreSubmitted: Function, updateScore: any }) {
    const [modalVisible, setModalVisible] = useState(false);
    const [numbersInput, onAddNumberInput] = useState(Array(6).fill('0'));
    const [total, updateTotal] = useState(0);
    const lang = useTaskContext().lang;
    const texts: ILoc = localization;

    // Recalculate total whenever numbersInput changes
    useEffect(() => {
        const newTotal = numbersInput.reduce((sum, v) => sum + (parseInt(v) || 0), 0);
        updateTotal(newTotal);
        updateScore(newTotal);
    }, [numbersInput, updateScore]);

    const onChangeNumber = (value: string, index: number) => {
        const updated = [...numbersInput];
        updated[index] = value.replace(/[^0-9]/g, ''); // Only allow numbers
        onAddNumberInput(updated);
    };

    return (
        <View style={{ paddingTop: 20, flex: 1 }}>
            <TouchableOpacity
                activeOpacity={1}
                onPress={() => {
                    if (!modalVisible) {
                        setModalVisible(true);
                    }
                }}
            >
                <Image source={require('@/assets/images/calculator.png')} style={{
                    width: 40,
                    height: 40,
                }} />
            </TouchableOpacity>
            <CustomModal modalVisible={modalVisible} width={'90%'} onRequestClose={setModalVisible} >
                <View style={{ display: 'flex', alignItems: 'center' }}>
                    <ThemedText style={[styles.modalText, styles.title]}>{texts.calculator_title[lang]}</ThemedText>
                    <View style={{ display: 'flex', flexDirection: 'row', gap: 30, padding: 10 }}>
                        <View style={{ flex: 1 }}>
                            {/* Animal */}
                            <View style={{ flexDirection: 'row', paddingTop: 10 }}>
                                <View style={{ flexDirection: 'row', flex: 3 }}>
                                    <Image source={require('@/assets/images/paw.png')} style={{ width: 30, height: 35, marginLeft: -10 }} />
                                    <ThemedText style={styles.modalText}>{texts.type_animals[lang]}</ThemedText>
                                </View>

                            </View>
                            {/* Trees */}
                            <View style={{ flexDirection: 'row', paddingTop: 10 }}>
                                <View style={{ flexDirection: 'row', flex: 3 }}>
                                    <Image source={require('@/assets/images/lines/line_grass.png')} style={styles.lineIcon} />
                                    <ThemedText style={styles.modalText}>{texts.type_trees[lang]}</ThemedText>
                                </View>

                            </View>
                            {/* Mountains */}
                            <View style={{ flexDirection: 'row', paddingTop: 10 }}>
                                <View style={{ flexDirection: 'row', flex: 3 }}>
                                    <Image source={require('@/assets/images/lines/line_rock.png')} style={styles.lineIcon} />
                                    <ThemedText style={styles.modalText}>{texts.type_mountains[lang]}</ThemedText>
                                </View>

                            </View>
                            {/* Fields */}
                            <View style={{ flexDirection: 'row', paddingTop: 10 }}>
                                <View style={{ flexDirection: 'row', flex: 3 }}>
                                    <Image source={require('@/assets/images/lines/line_land.png')} style={styles.lineIcon} />
                                    <ThemedText style={styles.modalText}>{texts.type_fields[lang]}</ThemedText>
                                </View>

                            </View>
                            {/* Buildings */}
                            <View style={{ flexDirection: 'row', paddingTop: 10 }}>
                                <View style={{ flexDirection: 'row', flex: 3 }}>
                                    <Image source={require('@/assets/images/lines/line_constru.png')} style={styles.lineIcon} />
                                    <ThemedText style={styles.modalText}>{texts.type_buildings[lang]}</ThemedText>
                                </View>

                            </View>
                            {/* Water */}
                            <View style={{ flexDirection: 'row', paddingTop: 10 }}>
                                <View style={{ flexDirection: 'row', flex: 3 }}>
                                    <Image source={require('@/assets/images/lines/line_water.png')} style={styles.lineIcon} />
                                    <ThemedText style={styles.modalText}>{texts.type_water[lang]}</ThemedText>
                                </View>

                            </View>
                        </View>
                        <View style={{ flex: 1 }}>
                            <View style={{ paddingTop: 5 }}>
                                <TextInput
                                    style={styles.input}
                                    keyboardType="numeric"
                                    onChangeText={(number) => onChangeNumber(number, 0)}
                                    value={numbersInput[0]}
                                    maxLength={3}
                                />
                            </View>
                            <View style={{ paddingTop: 5 }}>
                                <TextInput
                                    style={styles.input}
                                    keyboardType="numeric"
                                    onChangeText={(number) => onChangeNumber(number, 1)}
                                    value={numbersInput[1]}
                                    maxLength={3}
                                />
                            </View>
                            <View style={{ paddingTop: 5 }}>
                                <TextInput
                                    style={styles.input}
                                    keyboardType="numeric"
                                    onChangeText={(number) => onChangeNumber(number, 2)}
                                    value={numbersInput[2]}
                                    maxLength={3}
                                />
                            </View>
                            <View style={{ paddingTop: 5 }}>
                                <TextInput
                                    style={styles.input}
                                    keyboardType="numeric"
                                    onChangeText={(number) => onChangeNumber(number, 3)}
                                    value={numbersInput[3]}
                                    maxLength={3}
                                />
                            </View>
                            <View style={{ paddingTop: 5 }}>
                                <TextInput
                                    style={styles.input}
                                    keyboardType="numeric"
                                    onChangeText={(number) => onChangeNumber(number, 4)}
                                    value={numbersInput[4]}
                                    maxLength={3}
                                />
                            </View>
                            <View style={{ paddingTop: 5 }}>
                                <TextInput
                                    style={styles.input}
                                    keyboardType="numeric"
                                    onChangeText={(number) => onChangeNumber(number, 5)}
                                    value={numbersInput[5]}
                                    maxLength={3}
                                />
                            </View>
                        </View>
                    </View>




                    <ThemedText style={[styles.modalText, styles.total]}>Total: {total} </ThemedText>
                    <TouchableOpacity
                        activeOpacity={1}
                        onPress={() => {
                            onScoreSubmitted();
                            setModalVisible(false);
                        }}
                        style={styles.inputButton}
                    >
                        <ThemedText style={styles.appButtonText} >Ok</ThemedText>
                    </TouchableOpacity>
                </View>
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
        fontSize: 20,
        fontFamily: 'VixarASCI',
        color: "black",
        paddingTop: 5,
        marginLeft: 10,
    },
    input: {
        height: 40,
        width: 50,
        borderWidth: 1,
        borderRadius: 5,
        textAlign: 'center',
    },
    lineIcon: {
        width: 15,
        height: 35
    },
    title: {
        textDecorationLine: 'underline',
        fontSize: 23
    },
    total: {
        fontSize: 26
    },
    inputButton: {
        backgroundColor: "#009688",
        width: 50,
        borderRadius: 360,
        paddingVertical: 10,
        paddingHorizontal: 10,
        marginTop: 10
    },
    appButtonText: {
        fontFamily: 'VixarASCI',
        fontSize: 24,
        color: "#fff",
        alignSelf: "center",
        textTransform: "uppercase"
    },
});
