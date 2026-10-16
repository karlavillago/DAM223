/* 1.ZONA DE IMPORTACIONES */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image } from 'react-native';
import { Saludo } from './components/Saludo';
import { Saludo2 } from './components/Saludo2';
import { Perfil } from './components/Perfil';

/* 2.ZONA DEL MAIN(COMPONENTES, SCREENS) / EJECUCION*/
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hola Maricruz REACT NATIVE</Text>
      <Image source={require('./assets/wave.png')}></Image>
      <Saludo></Saludo>
      <Saludo2></Saludo2>
      <Perfil nombre="Karla Maria Cruz Villagomez Jimenez" 
      carrera="TIID" 
      materia="Movil"
      cuatri="Cuarto cuatrimestre">
      </Perfil>
      
      <Perfil nombre="Juan" 
      carrera="TIID" 
      materia="Movil"
      cuatri="Cuarto cuatrimestre">
      </Perfil>
      
      
      <StatusBar style="auto" />
    </View>
  );
}
/* 3.ZONA DE LA ESTETICA */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});