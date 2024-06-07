import { View, StyleSheet, DimensionValue } from "react-native";
import { Modal } from "react-native";

interface Props {
    children: any,
    modalVisible: boolean,
    onRequestClose: Function,
    width?: DimensionValue | undefined,
    height?: DimensionValue | undefined
}

export function CustomModal({ children, modalVisible, onRequestClose, width = 'auto', height = 'auto' }: Props) {

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                onRequestClose(!modalVisible)
            }}>
            <View style={styles.centeredView}>
                <View style={[styles.modalView, { width: width, height: height }]}>
                    {children}
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    modalView: {
        // width: 250,
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    }
});