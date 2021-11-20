import React from "react";
import { View, Text, Button, Image, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { blueColor, orangeColor, } from "../../utils";
import { useSelector, useDispatch } from "react-redux"
import { bindActionCreators } from "redux";
import { actionCreators } from "../../redux/"
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Icon from "../../components/icon"



const Cart = () => {

    const books_in_cart = useSelector(state => state.BooksReducer)
    // console.log("sepettekiler", books_in_cart)
    const dispatch = useDispatch();
    const { remove_from_cart } = bindActionCreators(actionCreators, dispatch)
    return (
        <View>
            {/* <List
                title="Remove -"
                backColor={orangeColor}
                booksData={books_in_cart}
                onPress={() => console.log("remove -")}
            /> */}

            <FlatList

                keyExtractor={(item, index) => `${item.id}${index}`}
                data={books_in_cart}
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
                                <View style={[{ backgroundColor: orangeColor }, styles.viewStyle]}>
                                    {/* <CustomButton title={title} backColor={backColor} /> */}
                                    <TouchableOpacity onPress={() => { remove_from_cart(item) }}>
                                        <Text style={styles.textStyle}>
                                            Remove -
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

export default Cart;