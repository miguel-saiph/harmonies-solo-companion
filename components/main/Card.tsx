import { ThemedText } from "@/components/ThemedText";
import { CardNames, MapType } from "@/components/main/CardNames";
import { HighScore } from "@/components/main/HighScore";
import { Medal, MedalType } from "@/components/main/Medal";
import { Alert, Button, View } from "react-native";
import { Image } from 'react-native';

export default function Card({ navigation, route }: any) {
    return (
        <View style={{
            width: '90%',
            height: '90%',
            backgroundColor: '#e5d8c4',
            alignSelf: 'center',
            alignItems: "center",
            shadowColor: '#000',
            shadowOpacity: 0.45,
            shadowOffset: {width: 0, height: 7},
            shadowRadius: 9.31,
            elevation: 7,
            borderRadius: 20,
            opacity: .8
        }}>
            <ThemedText style={{ 
                fontFamily: 'VixarASCI',
                fontSize: 35,
                color: '#7d7f7f',
                paddingTop: 25,
            }}>
                Air, Land and Sea
            </ThemedText>
            <Image source={require('@/assets/images/cards/sc1.png')} style={{
                width: 300,
                height: 200
             }} resizeMode={"contain"} />
             {/* <Image source={require('@/assets/images/maps/map_a.png')} style={{
                width: 100,
                height: 80,
                paddingTop: 50
             }} resizeMode={"contain"} /> */}
             <CardNames animals={
                [
                    { name: 'Vulture', type: 'rock'},
                    { name: 'Wolf', type: 'grass'},
                    { name: 'Fish', type: 'water'},
                ]
                } mapType={MapType.A}>
             </CardNames>
             <View style={{
                display: 'flex',
                flexDirection: 'row',
                marginTop: 10
             }}>
                <Medal type={MedalType.Bronze}></Medal>
                <Medal type={MedalType.Silver}></Medal>
                <Medal type={MedalType.Gold}></Medal>
             </View>
             {/* <View style={{
                display: 'flex',
                flexDirection: 'row'
             }}>
                
             </View> */}
             <HighScore/>
             <View style={{
                // flexDirection: "row",
                alignItems: "flex-end",
                marginLeft: "auto"
             }}>
                <Button
                    title="Submit"
                    onPress={() => Alert.alert('TO DO: Submit highscore')}
                    />
             </View>
             
             
             
        </View>
    );
}