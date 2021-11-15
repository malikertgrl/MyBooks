import React from "react";
import { View, Text, Button, Image } from "react-native";
import { blueColor } from "../../utils";
import List from "../lists"
import { Data } from "../lists/utils/Data"

const Books = () => {

    return (
        <View style={{ flex: 1 }}>
            <List
                title="Add +"
                backColor={blueColor}
                booksData={Data} />
        </View>
    )
}

export default Books;