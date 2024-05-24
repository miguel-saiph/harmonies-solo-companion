import Card from '@/components/main/Card';
import React, { useRef } from 'react';
import {
    SafeAreaView,
    ScrollView,
    Text,
    StyleSheet,
    View,
    ImageBackground,
    Animated,
    useWindowDimensions,
} from 'react-native';

const images = new Array(15).fill(
    'https://images.unsplash.com/photo-1556740749-887f6717d7e4',
);

export default function Carousel({ navigation }: any) {
    const scrollX = useRef(new Animated.Value(0)).current;

    const { width: windowWidth, height: windowHeight } = useWindowDimensions();

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={require('@/assets/images/background.jpg')} style={{
                width: '100%',
                height: '100%',
                justifyContent: "center",
                alignItems: "center"
            }}>
                <View style={styles.scrollContainer}>
                    <ScrollView
                        horizontal={true}
                        pagingEnabled
                        showsHorizontalScrollIndicator={false}
                        onScroll={Animated.event([
                            {
                                nativeEvent: {
                                    contentOffset: {
                                        x: scrollX,
                                    },
                                },
                            },
                        ], { useNativeDriver: false })}
                        scrollEventThrottle={1}>
                        {images.map((image, imageIndex) => {
                            return (
                                <View style={{ width: windowWidth, height: 580 }} key={imageIndex}>
                                    <Card />
                                </View>
                            );
                        })}
                    </ScrollView>
                    <View style={styles.indicatorContainer}>
                        {images.map((image, imageIndex) => {
                            const width = scrollX.interpolate({
                                inputRange: [
                                    windowWidth * (imageIndex - 1),
                                    windowWidth * imageIndex,
                                    windowWidth * (imageIndex + 1),
                                ],
                                outputRange: [8, 16, 8],
                                extrapolate: 'clamp',
                            });
                            return (
                                <Animated.View
                                    key={imageIndex}
                                    style={[styles.normalDot, { width }]}
                                />
                            );
                        })}
                    </View>
                </View>
            </ImageBackground>

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    scrollContainer: {
        height: 550,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 5
    },
    card: {
        flex: 1,
        marginVertical: 4,
        marginHorizontal: 16,
        borderRadius: 5,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
    },
    normalDot: {
        height: 8,
        width: 8,
        borderRadius: 4,
        backgroundColor: 'slategray', // or steelblue
        marginHorizontal: 4,
    },
    indicatorContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

// Color
// Rock = #7d7f7f
// Grass = #87992e
// Field = #d19f19
// Water = #2e7e8a
// Constru = #ba2a4b
// Extra = #c2641f