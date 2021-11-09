import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Profile from "../screens/Profile";
import MyStack from './MyStack';



const Drawer = createDrawerNavigator();


const MyDrawer = () => {
    return (
        <Drawer.Navigator
            screenOptions={{
                headerStyle: { backgroundColor: "#0080ff" },
                headerTitleAlign: "center",
                headerTintColor: "#fff"
            }}>
            <Drawer.Screen name="Profile" component={Profile} />
            <Drawer.Screen name="MyStack" component={MyStack} options={{ title: "Books", headerShown: false }} />




        </Drawer.Navigator>
    );
}


export default MyDrawer;