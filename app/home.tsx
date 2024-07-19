import PressableOpacity from "@/components/PressableAnimation";
import DataManager from "@/data/DataManager";
import { useEffect, useState } from "react";
import { Image, Animated, SafeAreaView, ImageBackground } from 'react-native';
import {StatusBar} from "expo-status-bar";
import { useTaskContext } from "@/hooks/configContext";

export default function HomeScreen({navigation}: any) {
    const [config] = useState(useTaskContext());

    useEffect(() => {
        DataManager.init();
        DataManager.instance.getHighscore(1);
        console.log('current lang: ', DataManager.instance.getCurrentLang())
        config.setLang(DataManager.instance.getCurrentLang());
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
