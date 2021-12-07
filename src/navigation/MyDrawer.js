import * as React from 'react';
import { View, TouchableOpacity } from "react-native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import Profile from "../screens/profile";
import MyStack from './MyStack';
import { blueColor } from "../utils"
import Cart from "../screens/cart"
import Books from "../screens/books"
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/core';
import Icon from "../components/icon"



const Drawer = createDrawerNavigator();

const MyDrawer = () => {

    const navigation = useNavigation()

    // console.log("navigation", navigation)
    return (
        <Drawer.Navigator initialRouteName="MyStack"
            screenOptions={{
                headerStyle: { backgroundColor: blueColor },
                headerTitleAlign: "center",
                headerTintColor: "#fff"
            }}>
            <Drawer.Screen name="Profile" component={Profile} />
            <Drawer.Screen name="MyStack" component={MyStack} options={{ title: "Kitaplar", headerShown: false }} />
            <Drawer.Screen name="Cart" component={Cart} options={{
                title: "Sepetim",
                headerLeft: () =>
                    <Icon name="arrow-left" color="#fff" size={20} navigation={() => navigation.navigate("Books")} />
            }} />


        </Drawer.Navigator>
    );
}


export default MyDrawer;