import { IScenario } from "@/app/carousel";
import { ThemedText } from "@/components/ThemedText";
import { CardNames, MapType } from "@/components/main/CardNames";
import { HighScore } from "@/components/main/HighScore";
import { Medal, MedalType } from "@/components/main/Medal";
import DataManager from "@/data/DataManager";
import React, { useEffect } from "react";
import { useState } from "react";
import { ImageSourcePropType, TouchableOpacity, View, Modal, StyleSheet, TextInput } from "react-native";
import { Image } from 'react-native';
import { CustomModal } from "./Modal";

const cardsSourceMap: ImageSourcePropType[] = [
    require("@/assets/images/cards/sc1.png"),
    require("@/assets/images/cards/sc2.png"),
    require("@/assets/images/cards/sc3.png"),
    require("@/assets/images/cards/sc4.png"),
    require("@/assets/images/cards/sc5.png"),
    require("@/assets/images/cards/sc6.png"),
    require("@/assets/images/cards/sc7.png"),
    require("@/assets/images/cards/sc8.png"),
    require("@/assets/images/cards/sc9.png"),
    require("@/assets/images/cards/sc10.png"),
    require("@/assets/images/cards/sc11.png"),
    require("@/assets/images/cards/sc12.png"),
    require("@/assets/images/cards/sc13.png"),
    require("@/assets/images/cards/sc14.png"),
    require("@/assets/images/cards/sc15.png"),
]

const nameColorMap: { [key: string]: string } = {
    ['rock']: "#7d7f7f",
    ['land']: "#d19f19",
    ['water']: "#2e7e8a",
    ['grass']: "#87992e",
    ['constru']: "#ba2a4b",
    ['extra']: "#c2641f"
}

export default function Card({ scenario, index, callback }: { scenario: IScenario, index: number, callback: Function }) {
    const [modalVisible, setModalVisible] = useState(false);
    const [number, onChangeNumber] = React.useState('');
    const [highscore, onChangeHighscore] = React.useState(0);

    const onScoreSubmitted = (): void => {
        if (parseInt(number) > highscore) {
            onChangeHighscore(parseInt(number));
            DataManager.instance.setNewHighscore(index, parseInt(number));
            callback();
        }
    }

    useEffect(() => {
        const previousHighscore: number = DataManager.instance.getHighscore(index);
        onChangeHighscore(previousHighscore);
    }, []);

    return (
        <View style={{
            width: '90%',
            height: '90%',
            backgroundColor: '#e5d8c4',
            alignSelf: 'center',
            alignItems: "center",
            shadowColor: '#000',
            shadowOpacity: 0.45,
            shadowOffset: { width: 0, height: 7 },
            shadowRadius: 9.31,
            elevation: 7,
            borderRadius: 20,
            opacity: .8
        }}>
            <ThemedText style={{
                fontFamily: 'VixarASCI',
                fontSize: 35,
                color: nameColorMap[scenario.type],
                paddingTop: 25,
            }}>
                {scenario.name}
            </ThemedText>
            <Image source={cardsSourceMap[index]} style={{
                width: 300,
                height: 200
            }} resizeMode={"contain"} />
            <CardNames animals={scenario.animals} mapType={scenario.map === 0 ? MapType.A : MapType.B}>
            </CardNames>
            <View style={{
                display: 'flex',
                flexDirection: 'row',
                marginTop: 10
            }}>
                <Medal type={MedalType.Bronze} score={highscore}></Medal>
                <Medal type={MedalType.Silver} score={highscore}></Medal>
                <Medal type={MedalType.Gold} score={highscore}></Medal>
            </View>
            <HighScore value={highscore} />
            <View style={{
                // flexDirection: "row",
                alignItems: "flex-end",
                marginLeft: "auto",
                marginTop: -15
            }}>
                <TouchableOpacity
                    activeOpacity={1}
                    onPress={() => {
                        setModalVisible(!modalVisible)
                        onChangeNumber("");
                    }}
                    style={styles.appButtonContainer}
                >
                    <ThemedText style={styles.appButtonText} >Submit</ThemedText>
                </TouchableOpacity>
                <CustomModal modalVisible={modalVisible} width={250} onRequestClose={setModalVisible}
                    children={
                        <View style={{alignItems: 'center'}}>
                            <ThemedText style={styles.modalText}>Type your new score:</ThemedText>
                                <TextInput
                                    style={styles.input}
                                    keyboardType="numeric"
                                    onChangeText={onChangeNumber}
                                    value={number}
                                    maxLength={3}
                                />
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
        </View>
    );
}

const styles = StyleSheet.create({
    appButtonContainer: {
        backgroundColor: "#009688",
        borderRadius: 360,
        paddingVertical: 10,
        paddingHorizontal: 10,
        marginBottom: 50
    },
    appButtonText: {
        fontFamily: 'VixarASCI',
        fontSize: 24,
        color: "#fff",
        alignSelf: "center",
        textTransform: "uppercase"
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 10,
        fontSize: 25,
        fontFamily: 'VixarASCI',
        textAlign: 'center',
        color: "black",
    },
    input: {
        height: 50,
        width: 50,
        margin: 10,
        borderWidth: 1,
        borderRadius: 5,
        padding: 15,
    },
    inputButton: {
        backgroundColor: "#009688",
        width: 50,
        borderRadius: 360,
        paddingVertical: 10,
        paddingHorizontal: 10,
        marginTop: 10
    },
});

// Button style:
// https://blog.logrocket.com/create-style-custom-buttons-react-native/