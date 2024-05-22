import PressableOpacity from "@/components/PressableAnimation";
import { ThemedText } from "@/components/ThemedText";
import { useRef, useEffect } from "react";
import { Button, InteractionManager, Pressable, Text, View } from "react-native";
import { Image, Animated } from 'react-native';

export default function HomeScreen({navigation}: any) {

    const onPress = () => {
        setTimeout(() => {
            navigation.navigate('Main', {name: 'Main'})
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
