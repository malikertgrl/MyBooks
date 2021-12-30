import React, { useState, useEffect } from "react";
import { View, Text, Button, Image, StyleSheet, FlatList, TouchableOpacity, ToastAndroid } from "react-native";
import { blueColor, orangeColor, } from "../../utils";
import { useSelector, useDispatch } from "react-redux"
import { bindActionCreators } from "redux";
import { actionCreators } from "../../redux/"
import Icon from "../../components/icon";
import { useNavigation } from "@react-navigation/core";
import CustomButton from "../../components/customButton";
import Counter from "../../components/counter";
import { Styles } from "./style"



const Cart = () => {

    const navigation = useNavigation();


    const { booksList } = useSelector(state => state.BooksReducer)
    console.log({ booksList })
    const dispatch = useDispatch();
    const { remove_from_cart } = bindActionCreators(actionCreators, dispatch)



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
                            <View style={Styles.seperatorStyle} />
                        )
                    }}
                    renderItem={({ item }) => {

                        return (

                            <View style={{ flexDirection: "row", }}>
                                <View style={{ elevation: 5 }}>
                                    <Image
                                        style={Styles.imageStyle}
                                        source={{ uri: item.imgUrl }}
                                    />
                                </View>

                                <View style={{ marginVertical: 10, justifyContent: "space-between" }}>
                                    <View>
                                        <Text style={Styles.nameStyle}>{item.name}</Text>
                                        <Text style={Styles.authorStyle}>{item.author}</Text>
                                    </View>
                                    <Counter item={item} />
                                    <CustomButton
                                        onPress={() => remove_from_cart(item)}
                                        title={"Remove -"}
                                        backColor={orangeColor} />
                                </View>
                            </View>

                        )
                    }}
                />
            </View >
            :
            <View style={Styles.emptyComponentView}>
                <Icon name="shopping-cart" size={150} color="#000" navigation={() => navigation.navigate("Books")} />
                <Text style={Styles.emptyComponentText}>
                    Sepetinizde ürün bulunmamaktadır...
                </Text>
            </View >
    )
}



export default Cart;