import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import style from "./style"


const Badge = () => {



    const { booksList } = useSelector(state => state.BooksReducer)

    console.log("ne geliyor bakalım", booksList.length)


    return (
        booksList.length !== 0 ?
            <View style={style.styles.badgeStyle}>
                <Text style={style.styles.textStyle}>

                    {booksList.length}
                </Text>
            </View>
            :
            null

    )
}

export default Badge

