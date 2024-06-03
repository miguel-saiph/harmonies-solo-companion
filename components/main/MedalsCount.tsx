import { ImageSourcePropType, View, Image } from "react-native";
import { ThemedText } from "../ThemedText";
import DataManager from "@/data/DataManager";

export function MedalsCount({ current }: { current: number }) {

    return (
        <View>
            <View style={{ alignItems: 'center' }}>
                <View style={{ flexDirection: 'row' }}>
                    <Image source={require('@/assets/images/medals/gold-medal.png')} style={{
                        width: 30,
                        height: 30
                    }} />
                    <ThemedText style={{
                        fontSize: 20,
                        fontFamily: 'VixarASCI',
                        color: "black",
                    }}>{current} / {DataManager.instance.getTotalGoldMedals()} </ThemedText>
                </View>
            </View>
        </View>
    );
}