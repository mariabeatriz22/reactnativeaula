import React from "react";
import { Button } from "react-native";

export default props => {
    function executar() {
        console.warn("Esta executando!!!")
    }
    return (
        <>
        <Button
         title="botao numero 1"
         onPress={executar}
         />
         <Button
         title="botao numero 2"
         onPress={function(){
            console.warn("Esta executando o botao numero 2!!!")
         }}
         />
         <Button
         title="botao numero 3"
         onPress={function(){
            console.warn("Esta executando o botao numero 3!!")
         }} />
         </>

    )
}