import React from 'react'
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native'
// import CustomButton from "../../components/customButton";
import { useNavigation } from "@react-navigation/core";


const List = ({ title, backColor, booksData, onPress }) => {


    //usenavigation ile props olarak almadan navigation özelliğini kullanabiliyoruz
    const navigation = useNavigation();
    // console.log({ title, backColor, booksData })

    return (
        <View>
            <FlatList
                keyExtractor={(item, index) => `${item.id}${index}`}
                data={booksData}
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
                                <View style={[{ backgroundColor: backColor }, styles.viewStyle]}>
                                    {/* <CustomButton title={title} backColor={backColor} /> */}
                                    <TouchableOpacity onPress={onPress}>
                                        <Text style={styles.textStyle}>
                                            {title}
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
export default List;
