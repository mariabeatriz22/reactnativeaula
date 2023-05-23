import React from "react";
import {FlatList, Text } from "react-native";
import Estilo from "../Estilo";

import Produto from "./Produto";

export default props => {
   

    return(
        <>
        <Text style={Estilo.txtGrande}>
            Lista de Produtos Versão 2
        </Text>
        <FlatList
               data={Produto}
               keyExtractor={item => `${item.id}`}
               renderItem={({item: p}) => {
                return <Text>{p.id} - {p.nome} tem R$ {p.preco}</Text>
                }}
        />
       </>
    )
}