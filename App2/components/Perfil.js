import { Text, View, Button,StyleSheet } from 'react-native';
import {useState } from 'react';
export const Perfil = ({nombre, carrera , materia, cuatri, style,}) => {
    /*definir estado*/
    const[mostrar,setMostrar]= useState(false);
return (
<View style={[estilos.tarjeta, style]}>
<Text style={estilos.nombres}>{nombre}</Text>
{ mostrar && 
<>
<Text style={estilos.carrera}>{carrera}</Text>
<Text style={estilos.otroTexto}>{materia}</Text>
<Text style={estilos.otroTexto}>{cuatri}</Text>
</>
}
<Button title="Ver perfil" onPress={ ()=>setMostrar(true) }></Button>
</View>
);
};
    const estilos=StyleSheet.create({
        nombres:{
            fontSize:24,
            fontWeight:800,
            textTransform:'uppercase',
        },
        carrera:{
            fontSize:20,
            fontFamily:'Roboto',
            color:'red',
        },
         otroTexto:{
            fontSize:18,
            fontFamily:'courier',
            color:'blue',
            fontStyle:'italic',
        },
        tarjeta:{
            borderWidth:2,
            borderRadius:12,
            padding:15,
            margin:10,
            backgroundColor:'',
        },

    });

