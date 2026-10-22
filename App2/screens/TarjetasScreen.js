import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Perfil } from '../components/Perfil';


export default function MenuScreen() {
  return (
    <View style={styles.container}>
     
  
      <Perfil nombre="Maricruz" 
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

      <Perfil nombre="Ricardo" 
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
    tarjeta2:{backgroundColor:'yellow'},
    tarjeta3:{backgroundColor:'azure'},
});