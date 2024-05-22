import PressableOpacity from "@/components/PressableAnimation";
import { ThemedText } from "@/components/ThemedText";
import { useRef, useEffect } from "react";
import { Button, ImageBackground, Pressable, Text, View } from "react-native";
import { Image, Animated } from 'react-native';
import { Colors } from "react-native/Libraries/NewAppScreen";

export default function MainScreen({ navigation, route }: any) {

    const onPress = () => {

    };
    return (
        <Animated.View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <ImageBackground source={require('@/assets/images/background.jpg')} style={{
                width: '100%',
                height: '100%',
                justifyContent: "center",
                alignItems: "center"
            }}>
                {/* <ImageBackground source={require('@/assets/images/foreground.jpg')} style={{
                    
                }}>
                    <Text>Inside</Text>
                </ImageBackground> */}
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
                        fontSize: 30,
                        color: '#8b8679',
                        paddingTop: 25
                    }}>
                        Air, Land and Sea
                    </ThemedText>
                    <Image source={require('@/assets/images/cards/sc1.png')} style={{
                        width: 300,
                        height: 200
                     }} resizeMode={"contain"} />
                     <Image source={require('@/assets/images/maps/map_a.png')} style={{
                        width: 100,
                        height: 80,
                        paddingTop: 50
                     }} resizeMode={"contain"} />
                </View>
    
            </ImageBackground>
        </Animated.View>
    );
}