import PressableOpacity from "@/components/PressableAnimation";
import DataManager from "@/data/DataManager";
import { useEffect } from "react";
import { Image, Animated } from 'react-native';
import { enterFullScreen } from "undefined";

export default function HomeScreen({navigation}: any) {

    useEffect(() => {
        DataManager.init();
        DataManager.instance.getHighscore(1);
        enterFullScreen();
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
        <Animated.View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
            }}
        >
            {/* <ThemedText style={{ fontFamily: 'VixarASCI' }}>
                Capricorn
            </ThemedText> */}
            <PressableOpacity children={
                <Image source={require('@/assets/images/title.png')} style={{ width: '100%' }} resizeMode={"contain"} />
                
            } onPress={onPress} navigation={navigation} />
        </Animated.View>
    );
}
