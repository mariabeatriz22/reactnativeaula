import React from "react";
import { Button, StyleSheet, View } from "react-native";

export default props => {
    return (
        <>
        <View style={styles.Botoes}>
        <Button title="+" onPress={props.inc}/>
        <Button title="-" onPress={props.desc}/>
        </View>
        </>
    )
}




const styles = StyleSheet.create({
    Botoes: {
        flexDirection: 'row'
    }
})