import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Profile from '../screens/Profile';
import Books from "../screens/Books";
import Cart from "../screens/Cart";

const Drawer = createDrawerNavigator();

function MyDrawer() {
    return (
        <Drawer.Navigator
            screenOptions={{
                headerStyle: { backgroundColor: "#0080ff" },
                headerTitleAlign: "center",
                headerTintColor: "#fff"
            }}>
            <Drawer.Screen name="Profile" component={Profile} />
            <Drawer.Screen name="Books" component={Books} />
            <Drawer.Screen name="Cart" component={Cart} />


        </Drawer.Navigator>
    );
}

export default function App() {
    return (
        <NavigationContainer>
            <MyDrawer />
        </NavigationContainer>
    );
}
