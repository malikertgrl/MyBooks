import React from "react";
import { View, Text } from "react-native";
import List from "../lists"
import { orangeColor } from "../../utils";
import { Data } from "../lists/utils/Data"

const Cart = () => {
    return (
        <View>
            <List
                title="Remove -"
                backColor={orangeColor}
                booksData={Data} />
        </View>
    )
}

export default Cart;