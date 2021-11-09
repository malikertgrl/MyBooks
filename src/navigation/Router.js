import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MyDrawer from '../navigator/MyDrawer';

export default function App() {
    return (
        <NavigationContainer>
            <MyDrawer />
        </NavigationContainer>
    );
}
