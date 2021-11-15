import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Profile from "../screens/profile";
import MyStack from './MyStack';
import { blueColor } from "../utils"
import Cart from "../screens/cart"
import Books from "../screens/books"


const Drawer = createDrawerNavigator();


const MyDrawer = () => {
    return (
        <Drawer.Navigator initialRouteName="MyStack"
            screenOptions={{
                headerStyle: { backgroundColor: blueColor },
                headerTitleAlign: "center",
                headerTintColor: "#fff"
            }}>
            <Drawer.Screen name="Profile" component={Profile} />
            <Drawer.Screen name="MyStack" component={MyStack} options={{ title: "Kitaplar", headerShown: false }} />
            <Drawer.Screen name="Cart" component={Cart} options={{ title: "Sepetim", headerShown: false }} />






        </Drawer.Navigator>
    );
}


export default MyDrawer;