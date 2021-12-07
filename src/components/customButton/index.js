import React from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native'

const CustomButton = ({ title, backColor }) => {
    // console.log(backColor)
    return (
        <View style={[{ backgroundColor: backColor }, styles.viewStyle]}>
            <TouchableOpacity onPress={() => console.log("tıklandı")}>
                <Text style={styles.textStyle}>
                    {title}
                </Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    textStyle: {
        color: "#fff",
        fontSize: 18
    },
    viewStyle: {
        justifyContent: "center",
        alignItems: "center",
        height: 35,
        width: 90,
        borderRadius: 10,
        margin: 5,
        position: "relative",
        marginTop: 70
    }
})

export default CustomButton;
