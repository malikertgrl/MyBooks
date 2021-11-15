import * as React from 'react';
import { View, Button, TouchableOpacity } from "react-native"
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import Books from '../screens/books';
import Cart from "../screens/cart";
import Ionicons from "react-native-vector-icons/Ionicons"
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import { blueColor } from '../utils';




const Stack = createStackNavigator();

const MyStack = ({ navigation }) => {
    return (
        <Stack.Navigator
            screenOptions={{
                //gestureEnabled: true screenOptions içerisinde çalıştırmak lazım bir de
                //gestureDirection ile yön belirtmek gerekiyor.
                gestureDirection: 'horizontal',
                gestureEnabled: true,
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                headerStyle: { backgroundColor: blueColor },
                headerTitleAlign: "center",
                headerTintColor: "#fff"
            }}>
            <Stack.Screen
                name="Books"
                component={Books}
                options={{
                    headerLeft: () =>
                        <View style={{ marginHorizontal: 15 }}>
                            <TouchableOpacity onPress={() => navigation.openDrawer()} >
                                <FontAwesome5 name="bars" size={20} color="#fff" />
                            </TouchableOpacity>
                        </View>,

                    headerRight: () =>
                        <View style={{ marginHorizontal: 15 }}>
                            <TouchableOpacity onPress={() => navigation.navigate("Cart")} >
                                <FontAwesome5 name="shopping-cart" size={20} color="#fff" />
                            </TouchableOpacity>
                        </View>
                }} />
            <Stack.Screen
                name="Cart"
                component={Cart}

            />
        </Stack.Navigator>
    )
}

export default MyStack;