import React from "react"
import {Text, View, StyleSheet} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
//import Primeiro from './componentes/PrimeiroComponente'
//import Of, {Comp1, Comp2} from './componentes/MultiplosComponentes'
// import MinMax from "./componentes/MinMax"
// import Aleatorio from "./componentes/Aleatorio"
// import Titulo from "./componentes/Titulo"
// import Botao from "./componentes/Botao"
// import Contador from "./componentes/Contador"
// import Pai from "./componentes/indireta/Pai"
// import ContadorV2 from "./componentes/contador/ContadorV2"

// import HomeScreen from "./componentes/HomeScreens"
// import DetailsScreen from "./componentes/DetailsScreen"
import Pai from "./componentes/relacao/Familia"
import Familia from "./componentes/relacao/Familia"
import Membro from "./componentes/relacao/Membro"
import { SafeAreaView } from "react-native-safe-area-context"


const Stack = createNativeStackNavigator()


export default () => (
    <SafeAreaView style={styles.TelaIniciante}>
        <Familia>
        <Membro nome="Jorge" sobrenome="Pereiras"/>
        <Membro nome="Edinaldo" sobrenome="Pereiras"/>
        <Membro nome="Marcinho" sobrenome="Pereiras"/>
        <Membro nome="Roberta" sobrenome="Pereiras"/>
    </Familia>
    <Familia>
        <Membro nome="Amor" sobrenome="Da Minha Vida"/>
        <Membro nome="Fernando" sobrenome="Da Silva"/>
        <Membro nome="Jorge" sobrenome="Da Silva"/>
        <Membro nome="Marcia" sobrenome="Da Silva"/>
        
    </Familia>
    </SafeAreaView>
   

    // <NavigationContainer>
    //         <Stack.Navigator>
    //             <Stack.Screen name="Home" component={HomeScreen}/>
    //             <Stack.Screen name="Details" component={DetailsScreen}/>
    //         </Stack.Navigator>
    //     </NavigationContainer>

        

    // <View style={styles.TelaIniciante}>
    //     <ContadorV2/>
        // {/* <Pai/> */}
    //     {/* <Contador inicial={100}/> */}
    //     {/* <Botao/> */}
    //     {/* <Titulo principal="Cadastro Produto"
    //             secundario="Tela de Cadastro"/> */}
    //     {/*Primeiro/>
    //     </ViewText>1 + 2</Text>
    //     <Text>O valor da soma 1 + 2 = {1+2}</Text>
    //     <Comp1/>
    //     <Comp2/>
    //     <Of/> */}
    //     {/* <MinMax min="3" max ="20"/>
    //     <MinMax min="5" max ="40"/>
    //     <MinMax min="7" max ="55"/>
    //     */}
    //      {/* <Aleatorio miny={0} maxx={100} /> */}
    // // </View>
)


// export default App

const styles = StyleSheet.create({
    TelaIniciante: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: 'center',
        padding: 20

    }
})

// Lista de comentários

// function App(){
//    const jsx = <Text>Maria Beatriz</Text>
//    return jsx
// }

// const App = function(){
//     return <Text>Component 2</Text>
// }

// export default function(){
//     return <Text>Component 3</Text>
// }

// export default () =>{
//     return <Text>Component 4</Text>
// }