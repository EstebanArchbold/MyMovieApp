import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {IconButton} from "react-native-paper"
import Home from "../screens/Home";
import Movie from "../screens/Movie";
import News from "../screens/News";
import Popular from "../screens/Popular";
import Search from "../screens/Search";

const Stack = createNativeStackNavigator();

export default function StackNavigation(props) {
    // Props destructirng
    const {navigation} = props;

    // Header Button
    const buttonLeft = () => {
        return(
            <IconButton
            icon="menu"
            onPress={() => navigation.openDrawer()}
            />
        );
    };

    const buttonRight = () => {
        return(
            <IconButton
            icon="magnify"
            onPress={() => navigation.navigate()}
        />
        );
    };
    

    return(
        <Stack.Navigator>
            <Stack.Screen name="home" 
            component={Home} 
            options={{title: 'Inicio', 
            headerLeft: () => buttonLeft(), 
            headerRight: () => buttonRight()}}
            />
            <Stack.Screen name="movie" 
            component={Movie} 
            options={{title: 'MovieAPP', 
            headerLeft: () => buttonLeft(), 
            headerRight: () => buttonRight()}} 
            />
            <Stack.Screen name="news" 
            component={News} 
            options={{title: 'Nuevas Peliculas', 
            headerLeft: () => buttonLeft(), 
            headerRight: () => buttonRight()}} 
            />
            <Stack.Screen name="popular" 
            component={Popular} 
            options={{title: 'Peliculas Populares', 
            headerLeft: () => buttonLeft(), 
            headerRight: () => buttonRight()}} 
            />
            <Stack.Screen name="search" 
            component={Search} 
            options={{title: 'Buscar pelicula', 
            headerLeft: () => buttonLeft()}} 
            />
        </Stack.Navigator>
    )
}