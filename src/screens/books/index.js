import React from "react";
import { View, Text, Alert, Image, StyleSheet, FlatList, TouchableOpacity, ToastAndroid } from "react-native";
import { blueColor, } from "../../utils";
import List from "../lists"
import { Data } from "../lists/utils/Data";
import { useSelector, useDispatch } from "react-redux"
import { bindActionCreators } from "redux";
import { actionCreators } from "../../redux/"



const Books = () => {
    const { booksList, number } = useSelector(state => state.BooksReducer)
    console.log("kitaplar", booksList)
    const dispatch = useDispatch();
    const { add_to_cart, remove_from_cart } = bindActionCreators(actionCreators, dispatch)


    const addCart = (item) => {
        // add_to_cart(item);
        const filterBooks = booksList.filter(x => x.id == item.id)
        if (filterBooks.length > 0) {
            return ToastAndroid.showWithGravity(
                "Ürün zaten sepette var !",
                ToastAndroid.SHORT,
                ToastAndroid.BOTTOM
            );
            //  Alert.alert("uyarı", "ürün zaten sepette var.")
        } else {
            // ToastAndroid.show("ürün sepete eklendi.", ToastAndroid.SHORT);
            return add_to_cart(item)
        }


    }

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
                                    <TouchableOpacity onPress={() => { addCart(item) }}>
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