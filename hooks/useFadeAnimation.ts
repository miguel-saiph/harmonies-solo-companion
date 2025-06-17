import React from "react";
import { Platform, Animated } from "react-native";

const FADE_IN_ANIMATION_CONFIG = {
    toValue: 1,
    duration: 1000,
    useNativeDriver: Platform.OS !== 'web',
}

const FADE_OUT_ANIMATION_CONFIG = {
    toValue: 0,
    duration: 1000,
    useNativeDriver: Platform.OS !== 'web',
}

export default function useAnimation() {
    let opacityValue = React.useRef(new Animated.Value(1)).current;

    const fadeIn = () => {
        Animated.timing(opacityValue, FADE_IN_ANIMATION_CONFIG).start();
        console.log('fadeIn')
    }

    const fadeOut = () => {
        Animated.timing(opacityValue, FADE_OUT_ANIMATION_CONFIG).start();
        console.log('fadeOut')
    }

    return {
        opacityValue,
        fadeIn,
        fadeOut
    }
}