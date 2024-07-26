import { Text, View, ImageBackground, StyleSheet, useWindowDimensions, Platform } from "react-native";

export function ScenarioNumber({number}: {number: number}) {
    const { width: windowWidth, height: windowHeight } = useWindowDimensions();

    return (
        <View style={styles.main}>
            <ImageBackground source={require("@/assets/images/number_bg.png")} style={[styles.bgImage,
                {left: Platform.OS === 'web' && windowWidth > 500 ? 500 : 7}
            ]}>
                <Text style={styles.text}>
                    {number}
                </Text>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        position: 'absolute',
        alignItems: "flex-end",
        marginLeft: "auto",
        left: 7,
        // top: -1
    },
    bgImage: {
        width: 42,
        height: 24,
        resizeMode:'contain',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#ffffff',
        textAlign: 'center'
    }
});