import React from "react";
import { View, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/core";

const Books = () => {

    //usenavigation ile props olarak almadan navigation özelliğini kullanabiliyoruz
    const navigation = useNavigation();
    console.log({ navigation })
    return (
        <View>
            <Text>Books</Text>
            <Button title="git" onPress={() => navigation.navigate("Cart")} />
        </View>
    )
}

export default Books;