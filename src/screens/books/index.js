import React from "react";
import { View, Text, Alert, Image, StyleSheet, FlatList, TouchableOpacity, ToastAndroid } from "react-native";
import { blueColor, } from "../../utils";
import List from "../lists"
import { Data } from "../lists/utils/Data";
import { useSelector, useDispatch } from "react-redux"
import { bindActionCreators } from "redux";
import { actionCreators } from "../../redux/"
import CustomButton from "../../components/customButton"
import style from "./style"



const Books = () => {
    const { booksList, number } = useSelector(state => state.BooksReducer)
    console.log("kitaplar", booksList)
    const dispatch = useDispatch();
    const { add_to_cart } = bindActionCreators(actionCreators, dispatch)


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
                        <View style={style.styles.seperatorStyle} />
                    )
                }}
                renderItem={({ item }) => {
                    return (
                        <View style={{ flexDirection: "row" }}>
                            <Image
                                style={style.styles.imageStyle}
                                source={{ uri: item.imgUrl }}
                            />
                            <View style={style.styles.textContainer}>
                                <View>
                                    <Text style={style.styles.nameStyle}>{item.name}</Text>
                                    <Text style={style.styles.authorStyle}>{item.author}</Text>
                                </View>
                                <View>
                                    <CustomButton
                                        onPress={() => addCart(item)}
                                        backColor={blueColor}
                                        title={"Add +"} />
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