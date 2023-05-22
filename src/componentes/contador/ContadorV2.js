// import React,{ useState} from "react";
// import {Text} from "react-native";
// import Estilo from "../Estilo";

// import ContadorDisplay from "./ContadorDisplay";
// import ContadorBotoes from "./ContadorBotoes";

// export default props => {
//     const [num, setNum] = useState(0)

//     const inc = () => setNum(num + 1)
//     const desc = () => setNum(num - 1)

//     return(
//         <>
//         <Text style={Estilo.txtGrande}>
//             Contador
//         </Text>
//         <ContadorDisplay num={num}/>
//         <ContadorBotoes inc={inc} desc={desc} />
//         </>
//     )
// }


// import React,{ useState} from "react";
// import * as React from 'react';
// import { Button, View, Text } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import ContadorDisplay from "./ContadorDisplay";
// import ContadorBotoes from "./ContadorBotoes";

// export default function ContadorV2({ navigation }) {
//     const [num, setNum] = useState(0)

//     const inc = () => setNum(num + 1)
//     const desc = () => setNum(num - 1)

//     return(
//         <>
//         <Text style={Estilo.txtGrande}>
//             Contador
//         </Text>
//         <ContadorDisplay num={num}/>
//         <ContadorBotoes inc={inc} desc={desc} />
//         <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Details Screen</Text>
//       <Button
//         title="Ir para o Aleatório"
//         onPress={() => navigation.Aleatorio('Details')}
//       />
//       <Button title="Ir para o Contador" onPress={() => navigation.ContadorV2('Contador')} />
//       <Button title="   Voltar ao inicio    " onPress={() => navigation.ContadorV2()} />
//     </View>
  
//         </>
//     )
// }

// // export default function HomeScreen({ navigation }) {
// //   return (
// //     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
// //       <Text>Home Screen</Text>
// //       <Button
// //         title="Go to Details"
// //         onPress={() => navigation.navigate('Details')}
// //       />
// //     </View>
// //   );
// // }