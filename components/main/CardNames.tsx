import { StyleSheet, View, Image, Text, ImageSourcePropType } from 'react-native';
import { ThemedText } from '@/components/ThemedText';

export const enum MapType {
    A, B
}

export interface IAnimalInfo {
    name: string,
    type: string
}

const typeMap: {[key: string]: ImageSourcePropType} = {
    ['rock']: require('@/assets/images/lines/line_rock.png'),
    ['land']: require('@/assets/images/lines/line_land.png'),
    ['water']: require('@/assets/images/lines/line_water.png'),
    ['grass']: require('@/assets/images/lines/line_grass.png'),
    ['constru']: require('@/assets/images/lines/line_constru.png')
}

export function CardNames({ animals, mapType }: { animals: IAnimalInfo[], mapType: MapType }) {
    return (
        <View style={{
            display: 'flex',
            flexDirection: 'row'
        }}>
            <View style={{
                flex: 4,
                marginLeft: -40,
                paddingTop: 10,
                flexDirection: 'column',
                display: 'flex',
            }}>
                {animals.map((animal: IAnimalInfo, index: number) => {
                    return (
                        <View key={index} style={styles.row}>
                            {/* {index === 0 ? <Text style={{marginLeft: -110}}>{''}</Text> : null} */}
                            <Image source={typeMap[animal.type]} style={styles.lineImage} />
                            <ThemedText style={styles.text}>
                                {animal.name}
                            </ThemedText>
                        </View>
                    )
                })}
            </View>
            <View style={{
                flex: 3
            }}>
                {
                    
                }
                <Image source={
                    mapType === MapType.A ?
                    require('@/assets/images/maps/map_a.png') :
                    require('@/assets/images/maps/map_b.png')
                    } style={styles.map} resizeMode={"contain"}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    row: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        // justifyContent: 'space-evenly',
        alignItems:'center',
        marginVertical: 3,
        marginLeft: 60,
        // marginBottom: 5
        // gap: 10
    },
    lineImage: {
        width: 15,
        height: 35,
        // marginBottom: -200,
    },
    text: {
        // marginTop: -6,
        fontFamily: 'VixarASCI',
        fontSize: 30,
        color: '#000',
        // paddingTop: 25,
        paddingTop: 5,
        marginLeft: 10,
        // textAlign: 'left',
    },
    map: {
        width: 87,
        height: 72,
        paddingTop: 140,
        paddingRight: 120,
        // flex: 3
    }
});
