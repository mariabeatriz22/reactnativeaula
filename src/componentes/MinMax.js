import React from "react";
import {Text} from 'react-native'
import Estilo from "./Estilo";

export default (param) =>{
console.warn(param)
    return (
        <Text style={Estilo.txtGrande}>
            O valor X é Maior que o Y</Text>
        )
}