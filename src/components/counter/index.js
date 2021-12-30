import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../redux';
import style from "./style"

const Counter = ({ item }) => {
    const dispatch = useDispatch();

    const { booksList } = useSelector(state => state.BooksReducer)
    const { add_count, reduce_count } = bindActionCreators(actionCreators, dispatch)

    console.log("stateee", booksList)
    console.log("item", item)
    return (
        <View style={style.styles.counterViewStyle}>
            <View>
                <TouchableOpacity onPress={() => reduce_count(item)} >
                    <Text style={style.styles.textCounterStyle}>-</Text>
                </TouchableOpacity>
            </View>
            <View style={style.styles.itemStyle}>
                <Text style={[style.styles.textCounterStyle, { color: "#fff", margin: 0 }]}>{item.count}</Text>
            </View>
            <View>
                <TouchableOpacity onPress={() => add_count(item)} >
                    <Text style={style.styles.textCounterStyle}>+</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Counter


