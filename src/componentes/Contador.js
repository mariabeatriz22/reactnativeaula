import React, { useState } from "react";
import {Text, Button} from "react-native";
import Estilo from "./Estilo";
import { Colors } from "react-native/Libraries/NewAppScreen";

export default props => {
    const [numero, setNumero] = useState(props.inicial)
    const inc = () => setNumero(numero + 1)
    const desc = () => setNumero(numero - 1)

    return (
        <>
        <Text style={Estilo.txtGrande}>{numero}</Text>
        <Button title="+" onPress={inc}/>
        <Button title="-" onPress={desc}/>
        
        </>
    )
}