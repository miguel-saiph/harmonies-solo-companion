import { View, StyleSheet, TouchableOpacity, Image, Modal, TextInput } from "react-native";
import { ThemedText } from "../ThemedText";
import { useEffect, useState } from "react";
import { CustomModal } from "./Modal";
import React from "react";

export function Calculator({ onScoreSubmitted, updateScore }: { onScoreSubmitted: Function, updateScore: any }) {
    const [modalVisible, setModalVisible] = useState(false);
    const [numbersInput, onAddNumberInput] = React.useState([] as string[]);
    const [total, updateTotal] = React.useState(0);
    let numbers: string[] = new Array(6);

    useEffect(() => {
        for (let i: number = 0; i < 5; i++) {
            numbersInput[i] = '0';   
        }
    }, []);

    const addNumber = (input: string) => {
        if (Number.isNaN(parseInt(input))) {
            return;
        }
        let newTotal: number = 0;
        numbersInput.forEach((v: string) => {
            newTotal += parseInt(v);
        });
        updateTotal(newTotal);
        updateScore(newTotal);
    }

    const onChangeNumber = (value: string, index: number) => {
        numbersInput[index] = value;
    }

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
            <CustomModal modalVisible={modalVisible} width={'90%'} onRequestClose={setModalVisible} children={
                <View style={{ alignItems: 'center' }}>
                    <ThemedText style={[styles.modalText, styles.title]}>Calculator</ThemedText>
                    <View style={{ alignItems: 'center' }}>
                        <View style={{ flexDirection: 'row', paddingTop: 5 }}>
                            <View style={{ flexDirection: 'row', flex: 3 }}>
                                <Image source={require('@/assets/images/paw.png')} style={{width: 30, height: 35, marginLeft: -10}} />
                                <ThemedText style={styles.modalText}>Animals</ThemedText>
                            </View>
                            <View style={{ flex: 1 }}>
                                <TextInput
                                    style={styles.input}
                                    keyboardType="numeric"
                                    onChangeText={(number) => onChangeNumber(number, 0)}
                                    onEndEditing={() => addNumber(numbersInput[0])}
                                    value={numbers[0]}
                                    maxLength={3}
                                    defaultValue="0"
                                />
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', paddingTop: 5 }}>
                            <View style={{ flexDirection: 'row', flex: 3 }}>
                                <Image source={require('@/assets/images/lines/line_grass.png')} style={styles.lineIcon} />
                                <ThemedText style={styles.modalText}>Trees</ThemedText>
                            </View>
                            <View style={{ flex: 1 }}>
                                <TextInput
                                    style={styles.input}
                                    onChangeText={(number) => onChangeNumber(number, 1)}
                                    onEndEditing={() => addNumber(numbersInput[1])}
                                    value={numbers[1]}
                                    maxLength={3}
                                    defaultValue="0"
                                />
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', paddingTop: 5 }}>
                            <View style={{ flexDirection: 'row', flex: 3 }}>
                                <Image source={require('@/assets/images/lines/line_rock.png')} style={styles.lineIcon} />
                                <ThemedText style={styles.modalText}>Mountains</ThemedText>
                            </View>
                            <View style={{ flex: 1 }}>
                                <TextInput
                                    style={styles.input}
                                    keyboardType="numeric"
                                    onChangeText={(number) => onChangeNumber(number, 2)}
                                    onEndEditing={() => addNumber(numbersInput[2])}
                                    value={numbers[2]}
                                    maxLength={3}
                                    defaultValue="0"
                                />
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', paddingTop: 5 }}>
                            <View style={{ flexDirection: 'row', flex: 3 }}>
                                <Image source={require('@/assets/images/lines/line_land.png')} style={styles.lineIcon} />
                                <ThemedText style={styles.modalText}>Fields</ThemedText>
                            </View>
                            <View style={{ flex: 1 }}>
                                <TextInput
                                    style={styles.input}
                                    keyboardType="numeric"
                                    onChangeText={(number) => onChangeNumber(number, 3)}
                                    onEndEditing={() => addNumber(numbersInput[3])}
                                    value={numbers[3]}
                                    maxLength={3}
                                    defaultValue="0"
                                />
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', paddingTop: 5 }}>
                            <View style={{ flexDirection: 'row', flex: 3 }}>
                                <Image source={require('@/assets/images/lines/line_constru.png')} style={styles.lineIcon} />
                                <ThemedText style={styles.modalText}>Buildings</ThemedText>
                            </View>
                            <View style={{ flex: 1 }}>
                                <TextInput
                                    style={styles.input}
                                    keyboardType="numeric"
                                    onChangeText={(number) => onChangeNumber(number, 4)}
                                    onEndEditing={() => addNumber(numbersInput[4])}
                                    value={numbers[4]}
                                    maxLength={3}
                                    defaultValue="0"
                                />
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', paddingTop: 5 }}>
                            <View style={{ flexDirection: 'row', flex: 3 }}>
                                <Image source={require('@/assets/images/lines/line_water.png')} style={styles.lineIcon} />
                                <ThemedText style={styles.modalText}>Water</ThemedText>
                            </View>
                            <View style={{ flex: 1 }}>
                                <TextInput
                                    style={styles.input}
                                    keyboardType="numeric"
                                    onChangeText={(number) => onChangeNumber(number, 5)}
                                    onEndEditing={() => addNumber(numbersInput[5])}
                                    value={numbers[5]}
                                    maxLength={3}
                                    defaultValue="0"
                                />
                            </View>
                        </View>
                        <ThemedText style={[styles.modalText, styles.total]}>Total: {total} </ThemedText>
                    </View>
                    <TouchableOpacity
                        activeOpacity={1}
                        onPress={() => {
                            onScoreSubmitted();
                            setModalVisible(!modalVisible);
                        }}
                        style={styles.inputButton}
                    >
                        <ThemedText style={styles.appButtonText} >Ok</ThemedText>
                    </TouchableOpacity>
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
        // padding: 15,
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