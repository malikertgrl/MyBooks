import React from "react";
import { View, Text, Button, Image } from "react-native";
import { useNavigation } from "@react-navigation/core";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { Data } from "./utils/Data"

const Books = () => {

    //usenavigation ile props olarak almadan navigation özelliğini kullanabiliyoruz
    const navigation = useNavigation();
    // console.log({ navigation })
    return (
        <View style={{ flex: 1 }}>
            <FlatList

                data={Data}
                ItemSeparatorComponent={() => {
                    return (
                        <View style={{ borderBottomWidth: 1, borderBottomColor: "gray", }} />

                    )


                }}
                renderItem={({ item }) => {
                    return (
                        <View style={{ flexDirection: "row", }}>
                            <Image
                                style={{ width: 100, height: 150, margin: 10 }}
                                source={{ uri: item.imgUrl }}
                            />
                            <View style={{ marginVertical: 10 }}>
                                <Text style={{ marginLeft: 5, fontSize: 18, fontWeight: "bold", color: "#000" }}>{item.name}</Text>
                                <Text style={{ marginLeft: 5, fontSize: 15, }}>{item.author}</Text>
                                <View style={{
                                    backgroundColor: "#0080ff", justifyContent: "center", alignItems: "center",
                                    height: 35, width: 70, borderRadius: 10, margin: 5, position: "relative", marginTop: 70
                                }}>
                                    <TouchableOpacity>
                                        <Text style={{ color: "#fff", fontSize: 18 }}>
                                            Add +
                                        </Text>
                                    </TouchableOpacity>

                                </View>
                            </View>
                        </View>
                    )
                }}
            />
        </View>
    )
}

export default Books;