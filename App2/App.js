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
     
  
      <Perfil nombre="Karla Maria Cruz Villagomez Jimenez" 
      carrera="TIID" 
      materia="Movil"
      cuatri="Cuarto cuatrimestre"
      style={styles.tarjeta1}>
      </Perfil>
      
      <Perfil nombre="Juan" 
      carrera="Mecatronica" 
      materia="circuitos"
      cuatri="Cuarto cuatrimestre"
      style={styles.tarjeta2}>
      </Perfil> 

      <Perfil nombre="paul" 
      carrera="TIID" 
      materia="Movil"
      cuatri="Cuarto cuatrimestre"
      style={styles.tarjeta3}>
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
    tarjeta1:{backgroundColor:'violet'},
    tarjeta2:{backgroundColor:'green'},
    tarjeta3:{backgroundColor:'azure'},
});