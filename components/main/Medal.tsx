import { ImageSourcePropType, View, Image } from "react-native";

export const enum MedalType {
    Bronze, Silver, Gold
}

const imagePaths: ImageSourcePropType[] = [
    require('@/assets/images/medals/bronze-medal.png'),
    require('@/assets/images/medals/silver-medal.png'),
    require('@/assets/images/medals/gold-medal.png')
]

export function Medal({type}: {type: MedalType}) {
    return (
        <View>
            <Image source={imagePaths[type]} style={{
                width: 50,
                height: 50
            }} />
        </View>
    );
}