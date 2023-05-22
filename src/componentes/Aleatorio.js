// import React, {useState} from "react";
// import { View, Text, Button } from "react-native";
// export default props => {
//     const diasDaSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
//     const [Dia, setDia] = useState(0);

//     const executar = () => {
//         const novoDia = (Dia + 1) % diasDaSemana.length;
//         setDia(novoDia);
//     };

//     const executar2 = () => {
//         const novoDia = (Dia + 2) % diasDaSemana.length;
//         setDia(novoDia);
//     };

//     const voltar = () => {
//         const novoDia = (Dia - 1 + diasDaSemana.length) % diasDaSemana.length;
//         setDia(novoDia);
//     };

//     return (
//         <>

//             <Button
//                 title="Pular um dia"
//                 onPress={executar}
//             />
//             <Button
//                 title="Pular dois dias"
//                 onPress={() => {
//                     executar2();
//                 }}
//             />
//             <Button
//                 title="Voltar ao dia anterior"
//                 onPress={voltar}
//             />
//             <Text>Dia da semana: {diasDaSemana[Dia]}</Text>
//         </>
//     );
// };



// import React, {useState} from "react";
// import { View, Text, Button } from "react-native";
// import DetailsScreen from "./DetailsScreen";

// export default function DetailsScreen({ navigation }) {
    

//     const diasDaSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
//     const [Dia, setDia] = useState(0);

//     const executar= () => {
//         const novoDia = (Dia + 1) % diasDaSemana.length;
//         setDia(novoDia);
//     };

//     const executar2 = () => {
//         const novoDia = (Dia + 2) % diasDaSemana.length;
//         setDia(novoDia);
//     };

//     const voltar = () => {
//         const novoDia = (Dia - 1 + diasDaSemana.length) % diasDaSemana.length;
//         setDia(novoDia);
//     };

//     return (
//         <>
//           onPress={() => navigation.push('Details')}
//             <Button
//                 title="Pular um dia"
//                 onPress={executar}
//             />
//             <Button
//                 title="Pular dois dias"
//                 onPress={() => {
//                     executar2();
//                 }}
//             />
//             <Button
//                 title="Voltar ao dia anterior"
//                 onPress={voltar}
//             />
//             <Text>Dia da semana: {diasDaSemana[Dia]}</Text>
//         </>
//     );
// };