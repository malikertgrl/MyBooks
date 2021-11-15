import React from 'react'
import { View, Text, FlatList, Image } from 'react-native'
import { Data } from "./utils/Data"
import CustomButton from "../../components/customButton";
import { blueColor } from "../../utils"
import { useNavigation } from "@react-navigation/core";


const List = () => {


    //usenavigation ile props olarak almadan navigation özelliğini kullanabiliyoruz
    const navigation = useNavigation();
    // console.log({ navigation })

    return (
        <View>
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
                                <View>
                                    <CustomButton title="Add +" backColor={blueColor} />
                                </View>
                            </View>
                        </View>
                    )
                }}
            />
        </View>
    )
}

export default List;
