import React, { Component } from "react";
import {Text} from 'react-native'
import Estilo from "../Estilo";

export default class Mega extends Component {
    render(){
        return(
            <Text style={Estilo.txtGrande}>
                Gerador de Mega-Sena {this.props.qtdeNumeros}
            </Text>
        )
    }
}