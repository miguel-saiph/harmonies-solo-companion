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

import data from '@/data/CardsData.json';
import { IAnimalInfo } from '@/components/main/CardNames';

export interface IScenario {
    name: string,
    type: string,
    animals: IAnimalInfo[],
    map: number
}

export default function Carousel({ navigation }: any) {
    const scrollX = useRef(new Animated.Value(0)).current;

    const { width: windowWidth } = useWindowDimensions();

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={require('@/assets/images/background.jpg')} style={{
                width: '100%',
                height: '100%',
                justifyContent: "center",
                alignItems: "center",
                flex: 1
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
                        {data.scenarios.map((scenario, index) => {
                            return (
                                <View style={{ width: windowWidth, height: 580 }} key={index}>
                                    <Card scenario={scenario as unknown as IScenario} index={index} />
                                </View>
                            );
                        })}
                    </ScrollView>
                    <View style={styles.indicatorContainer}>
                        {data.scenarios.map((scenario, index) => {
                            const width = scrollX.interpolate({
                                inputRange: [
                                    windowWidth * (index - 1),
                                    windowWidth * index,
                                    windowWidth * (index + 1),
                                ],
                                outputRange: [8, 16, 8],
                                extrapolate: 'clamp',
                            });
                            return (
                                <Animated.View
                                    key={index}
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