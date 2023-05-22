import React,{ useState} from "react";
import {StyleSheet, Text, View} from "react-native";
import Estilo from "../Estilo";

export default props => {
    return (
        <View style={styles.Display}>
        <Text style={[Estilo.txtGrande, styles.DisplayText]}>
           {props.num}
        </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    Display: {
        backgroundColor: '#000',
        padding: 20,
        width: 300
    },
    DisplayText: {
        color: '#FFF'
    }
}
)