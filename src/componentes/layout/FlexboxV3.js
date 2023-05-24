import React from "react";
import {View, StyleSheet} from "react-native";
import Quadrado from "./Quadrado";

export default props => {
    const lado = 50
    return (
        <View style={styles.FlexV3}>
        <Quadrado cor='#05f5a5'/>
        <Quadrado cor='#836FFF'/>
        <Quadrado cor='#C112DF'/>
        <Quadrado cor='#0F79F2'/>
        <Quadrado cor='#0F4503'/>
        </View>
    )
}

const styles = StyleSheet.create({
FlexV3: {
    flexDirection: "column-reverse",
    height: 350,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000'
}
})