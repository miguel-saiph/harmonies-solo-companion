import PressableOpacity from "@/components/PressableAnimation";
import DataManager from "@/data/DataManager";
import { useEffect, useState } from "react";
import { StyleSheet, SafeAreaView, ImageBackground, Platform } from 'react-native';
import {StatusBar} from "expo-status-bar";
import { useTaskContext } from "@/hooks/configContext";

export default function HomeScreen({navigation}: any) {
    const [config] = useState(useTaskContext());
    let isNavigating: boolean = false;

    useEffect(() => {
        DataManager.init();
        DataManager.instance.getHighscore(1);
        if (Platform.OS === 'web' || Platform.OS === 'ios') {
            setTimeout(() => {
                onPress()
            }, 500)
        }
    }, []);

    const onPress = () => {
        if (isNavigating) {
            return;
        }
        console.log('current lang: ', DataManager.instance.getCurrentLang())
        config.setLang(DataManager.instance.getCurrentLang());
        setTimeout(() => {
            navigation.navigate('Carousel', {name: 'Carousel'})
        }, 500)
        isNavigating = true;
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
                <ImageBackground source={require('@/assets/images/title.png')} style={styles.cover} resizeMode={"cover"} />
                
            } onPress={onPress} navigation={navigation} />
            
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    cover: {
        width: Platform.OS !== 'web' ? '100%' : 1080 * 0.35, 
        height: Platform.OS !== 'web' ? '100%' : 1920 * 0.35,
        alignSelf: 'center'
    }
});
