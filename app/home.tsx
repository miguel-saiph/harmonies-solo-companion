import PressableOpacity from "@/components/PressableAnimation";
import DataManager from "@/data/DataManager";
import { useEffect } from "react";
import { Image, Animated, SafeAreaView, ImageBackground } from 'react-native';
import {StatusBar} from "expo-status-bar";

export default function HomeScreen({navigation}: any) {

    useEffect(() => {
        DataManager.init();
        DataManager.instance.getHighscore(1);
    }, []);

    const onPress = () => {
        setTimeout(() => {
            navigation.navigate('Carousel', {name: 'Carousel'})
        }, 500)
        // InteractionManager.runAfterInteractions(() => {
        //     navigation.navigate('Main', {name: 'Main'})
        //   });
    };

    return (
        <SafeAreaView
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
            }}
        >
            <StatusBar style="dark"
                       translucent={true}
                       hidden={false}
            />
            <PressableOpacity children={
                <ImageBackground source={require('@/assets/images/title.png')} style={{ width: '100%', height: '100%' }} resizeMode={"cover"} />
                
            } onPress={onPress} navigation={navigation} />
            
        </SafeAreaView>
    );
}
