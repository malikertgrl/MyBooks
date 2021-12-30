import React, { useState, useEffect } from "react";
import { View, Text, Button, Image, StyleSheet, FlatList, TouchableOpacity, ToastAndroid } from "react-native";
import { blueColor, orangeColor, } from "../../utils";
import { useSelector, useDispatch } from "react-redux"
import { bindActionCreators } from "redux";
import { actionCreators } from "../../redux/"
import Icon from "../../components/icon";
import { useNavigation } from "@react-navigation/core";



const Cart = () => {

    const navigation = useNavigation();


    const { booksList } = useSelector(state => state.BooksReducer)
    console.log({ booksList })
    const dispatch = useDispatch();
    const {
        remove_from_cart,
        add_count,
        reduce_count } = bindActionCreators(actionCreators, dispatch)



    const reduce = (item) => {
        console.log("ne var ", booksList)
        const filterReduce = booksList.filter(x => x.count == 1)
        console.log({ filterReduce })

        // if (filterReduce > 0) {
        //     return ToastAndroid.showWithGravity(
        //         "Ürünü sepetten kaldırmak için remove'a tıklayınız.",
        //         ToastAndroid.SHORT,
        //         ToastAndroid.BOTTOM
        //     );
        // } else {
        //     reduce_count(item)
        // }

        reduce_count(item)
    }

    return (
        booksList.length > 0 ?

            <View>
                {/* <List
                title="Remove -"
                backColor={orangeColor}
                booksData={books_in_cart}
                onPress={() => console.log("remove -")}
            /> */}

                <FlatList

                    keyExtractor={(item, index) => `${item.id}${index}`}
                    data={booksList}
                    ItemSeparatorComponent={() => {
                        return (
                            <View style={{ borderBottomWidth: 1, borderBottomColor: "gray", }} />
                        )
                    }}
                    renderItem={({ item }) => {

                        return (

                            <View style={{ flexDirection: "row", }}>
                                <View style={{ elevation: 5 }}>
                                    <Image
                                        style={{ width: 150, height: 200, margin: 10 }}
                                        source={{ uri: item.imgUrl }}
                                    />
                                </View>

                                <View style={{ marginVertical: 10 }}>
                                    <Text style={{ marginLeft: 5, fontSize: 18, fontWeight: "bold", color: "#000" }}>{item.name}</Text>
                                    <Text style={{ marginLeft: 5, fontSize: 15, }}>{item.author}</Text>

                                    <View style={styles.counterViewStyle}>
                                        <View>
                                            <TouchableOpacity onPress={() => reduce(item)} >
                                                <Text style={styles.textCounterStyle}>-</Text>
                                            </TouchableOpacity>
                                        </View>
                                        <View style={{ backgroundColor: "#ff6f60", height: 30, width: 30, borderRadius: 20, alignSelf: "center", alignItems: "center", justifyContent: "center" }}>
                                            <Text style={[styles.textCounterStyle, { color: "#fff", margin: 0 }]}>{item.count}</Text>
                                        </View>
                                        <View>
                                            <TouchableOpacity onPress={() => add_count(item)} >
                                                <Text style={styles.textCounterStyle}>+</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                    <View style={[{ backgroundColor: orangeColor }, styles.viewStyle]}>

                                        {/* <CustomButton title={title} backColor={backColor} /> */}
                                        <TouchableOpacity onPress={() => { console.log({ item }) || remove_from_cart(item) }}>
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
            </View >
            :
            <View style={styles.emptyComponentView}>
                <Icon name="shopping-cart" size={150} color="#000" navigation={() => navigation.navigate("Books")} />
                <Text style={styles.emptyComponentText}>
                    Sepetinizde ürün bulunmamaktadır...
                </Text>
            </View >
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
        marginTop: 10
    },
    emptyComponentView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    emptyComponentText: {
        fontWeight: "bold", color: "#000"
    },
    textCounterStyle: {
        fontSize: 15,
        fontWeight: "bold",
        color: "#000",
        color: "#ff6f60",
        margin: 10
    },
    counterViewStyle: {
        backgroundColor: "#fff",
        marginVertical: 30,
        width: 100,
        flexDirection: "row",
        borderWidth: 1,
        justifyContent: "center",
        borderColor: "#808080",
        borderRadius: 20
    }
})

export default Cart;