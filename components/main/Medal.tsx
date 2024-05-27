import { ImageSourcePropType, View, Image } from "react-native";

export const enum MedalType {
    Bronze, Silver, Gold
}

const imagePaths: ImageSourcePropType[] = [
    require('@/assets/images/medals/bronze-medal.png'),
    require('@/assets/images/medals/silver-medal.png'),
    require('@/assets/images/medals/gold-medal.png')
]

export function Medal({type, score}: {type: MedalType, score: number}) {

    const isMedalActive = (): boolean => {
        if (type === MedalType.Bronze && score >= 90) {
            return true;
        } else if (type === MedalType.Silver && score >= 110) {
            return true;
        } else if (type === MedalType.Gold && score >= 130) {
            return true;
        }
        return false;
    }

    return (
        <View>
            <Image source={imagePaths[type]} style={{
                width: 50,
                height: 50,
                tintColor: isMedalActive() ? undefined : 'gray'
            }} />
        </View>
    );
}