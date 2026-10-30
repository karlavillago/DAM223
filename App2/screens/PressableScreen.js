/* 1.ZONA DE IMPORTACIONES */
import { StyleSheet, View , Text, Switch, Pressable} from 'react-native';
import { useState } from 'react';
/* 2.ZONA DEL MAIN(COMPONENTES, SCREENS) / EJECUCION*/
export default function PressableScreen() {
  const [encendido, setEncendido] = useState(false);
  const [contador,setContador] = useState(0);
  return (
    <View style={styles.container}>
 <Text style={styles.titulo}>Aqui va la practica 11</Text>
 <Switch
 value={encendido}
 onValueChange={(valor) => setEncendido(valor)}
 />
    <Text syle={styles.texto}>El switch esta: {encendido ? 'Encendido' : 'Apagado'}</Text>
    <Pressable
    style= {styles.boton}
    onPress={() => setContador(contador + 1)}>
      <text style={styles.textoBoton}>Presioname</text>
    </Pressable>
    <text style = {styles.texto}> veces presionado : {contador}</text>
    
    </View>
  );
}
/* 3.ZONA DE LA ESTETICA */
const styles = StyleSheet.create({
 container: {
  flex: 1,
  backgroundColor: '#fff',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
},
  titulo: {
  fontSize:24,
  fontWeight: 'bold',
  marginBottom:40,

},
  texto: {
  fontSize:18,
  marginVertical: 15,
  fontWeight: 'bold',
},
  boton: {
     backgroundColor: '#007BFF',
     padding:15,
     borderRadius:10,
     marginTop: 30,
},
  textoBoton: {
    color: 'white',
    fontSize:18,
    fontWeight:'bold',
  },
});