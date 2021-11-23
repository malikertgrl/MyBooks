import React from "react";
import { View, Text, Button, Image, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { blueColor, } from "../../utils";
import List from "../lists"
import { Data } from "../lists/utils/Data";
import { useSelector, useDispatch } from "react-redux"
import { bindActionCreators } from "redux";
import { actionCreators } from "../../redux/"



const Books = () => {
    const books = useSelector(state => state.BooksReducer)
    console.log("kitaplar", books)
    const dispatch = useDispatch();
    const { add_to_cart, remove_from_cart } = bindActionCreators(actionCreators, dispatch)

    return (
        <View style={{ flex: 1 }}>
            <FlatList
                keyExtractor={(item, index) => item.id}
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
                                <View style={[{ backgroundColor: blueColor }, styles.viewStyle]}>
                                    {/* <CustomButton title={title} backColor={backColor} /> */}
                                    <TouchableOpacity onPress={() => { add_to_cart(item) }}>
                                        <Text style={styles.textStyle}>
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

export default Books;