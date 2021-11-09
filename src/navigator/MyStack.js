import * as React from 'react';
import { View, Button, TouchableOpacity } from "react-native"
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import Books from '../screens/Books';
import Cart from "../screens/Cart";
import Ionicons from "react-native-vector-icons/Ionicons"
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from "react-native-vector-icons/MaterialIcons"


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
                headerStyle: { backgroundColor: "#0080ff" },
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
                                <FontAwesome5 name="bars" size={17} color="#fff" />
                            </TouchableOpacity>
                        </View>

                    //     <Button
                    //         onPress={() => navigation.openDrawer()}
                    //         title="Info"
                    //     />
                    // )
                }} />
            <Stack.Screen
                name="Cart"
                component={Cart}

            />
        </Stack.Navigator>
    )
}

export default MyStack;