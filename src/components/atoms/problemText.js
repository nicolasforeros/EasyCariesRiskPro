import React from 'react';
import { Text } from 'react-native';

const Problem = () => {
    return(
        <Text style={{textAlign:'center'}}>
            Problema: Los sistemas actuales para determinar el riesgo individual para caries dental son extensos y complejos, 
            por lo que no son aplicados con frecuencia.
            <Text style={{fontWeight:'bold'}}> INSAO-UAM </Text>
            propone un sistema alternativo. La aplicación permitirá determinar el riesgo para caries dental de forma ágil y practica.
            Recolección de información para una base de datos investigativa. 
        </Text>
    );
}

export default Problem;