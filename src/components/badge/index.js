import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { orangeColor } from '../../utils';
import { useSelector } from 'react-redux';


const Badge = () => {

    const { badgeStyle, textStyle } = styles;

    const { booksList } = useSelector(state => state.BooksReducer)

    console.log("ne geliyor bakalım", booksList.length)


    return (
        booksList.length !== 0 ?
            <View style={badgeStyle}>
                <Text style={textStyle}>

                    {booksList.length}
                </Text>
            </View>
            :
            null

    )
}

export default Badge

const styles = StyleSheet.create({
    badgeStyle: {
        zIndex: 100,
        width: 20,
        height: 20,
        borderRadius: 10,
        backgroundColor: orangeColor,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        marginTop: -10,
        marginLeft: 31
    },
    textStyle: {
        color: "#fff"
    }
})
