import Card from '@/components/main/Card';
import React, { useEffect, useRef, useState } from 'react';
import {
    SafeAreaView,
    ScrollView,
    Text,
    StyleSheet,
    View,
    ImageBackground,
    Animated,
    useWindowDimensions,
    TouchableOpacity,
    Image,
    Platform
} from 'react-native';

import data from '@/data/CardsData.json';
import { IAnimalInfo } from '@/components/main/CardNames';
import DataManager from '@/data/DataManager';
import { Info } from '@/components/main/Info';
import { MedalsCount } from '@/components/main/MedalsCount';
import { ScenarioNumber } from '@/components/main/ScenarioNumber';

export interface IScenario {
    name: { [lang: string]: string },
    type: string,
    animals: IAnimalInfo[],
    map: number
}

export default function Carousel({ navigation }: any) {
    let scrollX = useRef(new Animated.Value(0)).current;
    const [xCoords, setXCoords] = useState([] as number[]);
    const [loaded, setLoaded] = useState(false);
    const [fullyLoaded, setFullyLoaded] = useState(false);
    const refScrollView = useRef(null);
    const { width: windowWidth } = useWindowDimensions();
    const [fadeAnim] = useState(new Animated.Value(1));
    const [currentMedals, setCurrentMedals] = useState(0);

    useEffect(() => {
        // refScrollView.current.scrollTo({x: xCoords[2], animated: false});
        updateCurrentMedals();
        setTimeout(() => {
            Animated.timing(fadeAnim, {
                toValue: 0,
                duration: 500,
                useNativeDriver: false
              }).start(({finished}) => {
                if (finished) {
                    setFullyLoaded(true);
                }
            })
        }, 200);
    }, [loaded, refScrollView]);

    const handleScroll = (event: any) => {
        const index: number = xCoords.indexOf((scrollX as any).__getValue(), 0);
        if (index !== -1) {
            DataManager.instance.setLastScenario(index);
        }
    };

    const updateCurrentMedals = () => {
        setCurrentMedals(DataManager.instance.getGoldMedals());
    };

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={require('@/assets/images/background.jpg')} style={{
                width: '100%',
                height: '100%',
                justifyContent: "center",
                // alignItems: "center",
                flex: 1
            }}>
                <View style={styles.topBarContainer}>
                    <Info/>
                    <MedalsCount current={currentMedals}/>
                </View>
                <View style={styles.scrollContainer}>
                    <ScrollView
                        ref={refScrollView}
                        // pagingEnabled
                        // contentOffset={
                        //     {
                        //         x: xCoords[DataManager.instance.getLastScenario()],
                        //         y: 0
                        //     }
                        // }
                        // showsHorizontalScrollIndicator={Platform.OS !== 'web' ? false : true}
                        showsVerticalScrollIndicator={Platform.OS !== 'web' ? false : true}
                        // persistentScrollbar={Platform.OS !== 'web' ? false : true}
                        onScroll={
                            Animated.event([
                            {
                                nativeEvent: {
                                    contentOffset: {
                                        x: scrollX
                                    }
                                },
                            },
                            ], { useNativeDriver: false,
                                listener: handleScroll
                             })
                        }
                        scrollEventThrottle={1}>
                        {data.scenarios.map((scenario, index) => {
                            return (
                                <View style={{ width: windowWidth, height: 250 }} key={index}
                                onLayout={
                                    event => {
                                        const layout = event.nativeEvent.layout;
                                        xCoords[index] = layout.x;
                                        if (index >= data.scenarios.length - 1) {
                                            setLoaded(true);
                                        }
                                    }
                                }
                                onPointerEnterCapture={
                                    () => { DataManager.instance.setLastScenario(index) }
                                }>
                                    
                                    <Card scenario={scenario as unknown as IScenario} index={index} callback={updateCurrentMedals} />
                                    <ScenarioNumber number={index + 1} />
                                </View>
                            );
                        })}
                    </ScrollView>
                </View>
            </ImageBackground>
            <Animated.View style={{
                flex: 1,
                width: '100%',
                height: '100%',
                backgroundColor: 'white',
                position: 'absolute',
                opacity: fadeAnim,
                display: fullyLoaded ? 'none' : 'flex'
            }}/>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    topBarContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 20,
        paddingRight: 15
    },
    scrollContainer: {
        height: 550,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 5
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
        marginBottom: -8,
        display: Platform.OS === 'web' ? 'none' : 'flex'
    },
});

// Color
// Rock = #7d7f7f
// Grass = #87992e
// Field = #d19f19
// Water = #2e7e8a
// Constru = #ba2a4b
// Extra = #c2641f