import React from "react";
import {View, StyleSheet} from "react-native";
import Quadrado from "./Quadrado";

export default props => {
    const lado = 95
    return (
        <View style={styles.FlexV1}>
        <Quadrado cor='#05f5a5'/>
        <Quadrado cor='#836FFF'/>
        <Quadrado cor='#C112DF'/>
        <Quadrado cor='#0F79F2'/>
        <Quadrado cor='#0F4503'/>
        </View>
    )
}

const styles = StyleSheet.create({
FlexV1: {
    
    justifyContent: 'center',
    backgroundColor: '#000'
}
})
