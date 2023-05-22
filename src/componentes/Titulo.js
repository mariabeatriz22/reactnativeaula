import React, { Fragment } from 'react';
import {View, Text } from 'react-native';
import Estilo from './Estilo';

export default props => {
    // <Fragment>
    //     <Text style={Estilo.txtGrande}>{props.principal}</Text>
    //     <Text>{props.secundario}</Text>
    // </Fragment>
    <>
     <Text style={Estilo.txtGrande}>{props.principal}</Text>
        <Text>{props.secundario}</Text>
    </>
}