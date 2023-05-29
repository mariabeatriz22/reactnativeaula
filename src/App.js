// import React from "react"
// import {Text, View, StyleSheet} from 'react-native'
// import {NavigationContainer} from '@react-navigation/native'
// import {createNativeStackNavigator} from '@react-navigation/native-stack'
// //import Primeiro from './componentes/PrimeiroComponente'
// //import Of, {Comp1, Comp2} from './componentes/MultiplosComponentes'
// // import MinMax from "./componentes/MinMax"
// // import Aleatorio from "./componentes/Aleatorio"
// // import Titulo from "./componentes/Titulo"
// // import Botao from "./componentes/Botao"
// // import Contador from "./componentes/Contador"
// // import Pai from "./componentes/indireta/Pai"
// // import ContadorV2 from "./componentes/contador/ContadorV2"

// // import HomeScreen from "./componentes/HomeScreens"
// // import DetailsScreen from "./componentes/DetailsScreen"
// // import Pai from "./componentes/relacao/Familia"
// // import Familia from "./componentes/relacao/Familia"
// // import Membro from "./componentes/relacao/Membro"
// import { SafeAreaView } from "react-native-safe-area-context"
// // // import ListaProduto from "./componentes/produto/ListaProduto"
// // import ListaProdutoV2 from "./componentes/produto/ListaProduto"
// // import Quadrado from "./componentes/layout/Quadrado"
// // import FlexboxV1 from "./componentes/layout/FlexboxV1"
// // import FlexboxV4 from "./componentes/layout/FlexboxV4"
// // import Mega from "./componentes/mega/Mega"
// import AppFilmes from "./componentes/filme/AppFilmes"
// import AppFilme2 from "./componentes/filme/AppFilmes2"



// const Stack = createNativeStackNavigator()


// export default () => (
    // <SafeAreaView style={styles.TelaIniciante}>
     //  <AppFilmes/>

    //  <NavigationContainer>
    //  <Stack.Navigator>
    //  <Stack.Screen name="AppFilmes" component={AppFilmes}/>
    //  <Stack.Screen name="AppFilmes2" component={AppFilme2}/>
    //  </Stack.Navigator>
    //  </NavigationContainer>



    //     <Stack.Screen name="Menu" component={AppFilmes2}/> 
    //      <AppFilmes2/> 
    //  <AppFilmes/>
    /* <Mega qtdeNumeros={7}/> */
       /* <FlexboxV4/> */
         /* <ListaProdutoV2/> */
        /* <ListaProduto/> */
        /* <Familia>
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
        
    </Familia> */
    // </SafeAreaView>
   

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
// )


// export default App

// const styles = StyleSheet.create({
//     TelaIniciante: {
//         flexGrow: 1,
//         justifyContent: "center",
//         alignItems: 'center',
//         padding: 20

//     }
// })

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

import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import TaskList from './componentes/atividade/TaskList';
import AddTask from './componentes/atividade/AddTask';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const removeTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const toggleTaskCompletion = (index) => {
    const updatedTasks = tasks.map((task, i) => {
      if (i === index) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <TaskList
          tasks={tasks}
          removeTask={removeTask}
          toggleTaskCompletion={toggleTaskCompletion}
        />
      </ScrollView>
      <AddTask addTask={addTask} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;