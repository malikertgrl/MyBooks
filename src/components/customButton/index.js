import React from 'react'
import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native';

import style from './style';

const CustomButton = ({ title, backColor, onPress }) => {
    // console.log(backColor)
    return (

        <TouchableOpacity onPress={onPress}>
            <View style={[{ backgroundColor: backColor }, style.styles.viewStyle]}>
                <Text style={style.styles.textStyle}>
                    {title}
                </Text>
            </View>
        </TouchableOpacity >

    )
}


export default CustomButton;
