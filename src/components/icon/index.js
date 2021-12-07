import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


const Icon = ({ navigation, name, color, size }) => {

    return (
        <View style={{ marginHorizontal: 15 }}>
            <TouchableOpacity onPress={() => navigation()} >
                <FontAwesome5 name={name} size={size} color={color} />
            </TouchableOpacity>
        </View>
    )
}

export default Icon;
