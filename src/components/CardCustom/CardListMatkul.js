import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const CardListMatkul = () => {
    return (
        <View style={styles.container}>
        </View>
    )
}

export default CardListMatkul

const styles = StyleSheet.create({
    container: {
        height: 100,
        backgroundColor: "white",
        justifyContent: "center",
        marginTop: 15,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 1,
        },
    },
})

