import * as React from 'react';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import Books from '../screens/books';
import Cart from "../screens/cart";
import { blueColor } from '../utils';
import Icon from "../components/icon"





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
                        <Icon navigation={navigation.openDrawer} name="bars" />,

                    headerRight: () =>
                        <Icon navigation={() => navigation.navigate("Cart")} name="shopping-cart" />,

                }} />
            <Stack.Screen name="Cart" component={Cart}
            />
        </Stack.Navigator>
    )
}

export default MyStack;