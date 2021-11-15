import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


const Icon = ({ navigation, name }) => {

    return (
        <View style={{ marginHorizontal: 15 }}>
            <TouchableOpacity onPress={() => console.log({ navigation, name }) || navigation()} >
                <FontAwesome5 name={name} size={20} color="#fff" />
            </TouchableOpacity>
        </View>
    )
}

export default Icon;
