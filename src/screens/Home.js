import React, {useState, useEffect} from "react";
import {StyleSheet, ScrollView, View, Text, SafeAreaView} from "react-native"
import { Title } from "react-native-paper";
import { getNewsMoviesApi } from "../api/movies";

export default function Home() {
    const [newMovies, setNewMovies] = useState(null)
    console.log(newMovies);

    useEffect(() => {
        getNewsMoviesApi().then((response) => {
            setNewMovies(response.results)
        })
    }, [])

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
        <SafeAreaView>
            <Text>Estamos en Home</Text>
        </SafeAreaView>
            {/* {newMovies && (
                <View style={styles.news}>
                    <Title style={styles.newsTitle}>Nuevas Peliculas</Title>
                </View>
            )};       */}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    news: {
        marginVertical: 10,
    },
    newsTitle: {
        marginBottom: 15,
        marginHorizontal: 20,
        fontWeight: "bold",
        fontSize: 12,
    },
});