import React, { useEffect } from 'react';

import {
    Pressable,
    Animated,
} from 'react-native';

import Proptypes from 'prop-types';
import useAnimation from '@/hooks/useFadeAnimation';

const PressableOpacity = ({children, onPress, navigation}: any) => {

    let {
        fadeIn,
        fadeOut,
        opacityValue
    } = useAnimation();

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
          // Screen was focused
          opacityValue = new Animated.Value(1);
          fadeIn();
        });
    
        return unsubscribe;
      }, [navigation]);

    return (
        <Pressable
            // onPressIn={fadeIn}
            onPressOut={fadeOut}
            onPress={onPress}
            style={{ width: '100%' }}>
            
            <Animated.View
                style={{opacity: opacityValue, width: '100%'}}>
                    {children}
                    
            </Animated.View>
                

            </Pressable>
    );
};

PressableOpacity.propTypes = {
    children: Proptypes.object.isRequired,
    onPress: Proptypes.func.isRequired,
    navigation: Proptypes.object.isRequired
}

export default PressableOpacity;