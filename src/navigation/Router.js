import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MyDrawer from './MyDrawer';

const Router = ({ navigation }) => {
    return (
        <NavigationContainer>
            <MyDrawer />
        </NavigationContainer>
    );
}

export default Router;