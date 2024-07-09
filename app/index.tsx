import PressableOpacity from "@/components/PressableAnimation";
import { ThemedText } from "@/components/ThemedText";
import { useRef, useEffect } from "react";
import { Button, Pressable, Text, View } from "react-native";
import { Image, Animated } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./home";

import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
// import MainScreen from "./main";
import Carousel from "./carousel";
import {StatusBar} from "expo-status-bar";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();

export default function Index() {
    const [loaded] = useFonts({
        VixarASCI: require('../assets/fonts/Vixar ASCI Regular.ttf'),
    });

    useEffect(() => {
        if (loaded) {
            SplashScreen.hideAsync();
        }
    }, [loaded]);

    if (!loaded) {
        return null;
    }

    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{ headerShown: false }}
            />
            {/* <Stack.Screen
                name="Main"
                component={MainScreen}
                options={{ headerShown: false }}
            /> */}
            <Stack.Screen
                name="Carousel"
                component={Carousel}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
}