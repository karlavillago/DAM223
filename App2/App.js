/* 1.ZONA DE IMPORTACIONES */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image } from 'react-native';
import { Saludo } from './components/saludo';
import { Saludo2 } from './components/Saludo2';

/* 2.ZONA DEL MAIN(COMPONENTES, SCREENS) / EJECUCION*/
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hola Maricruz REACT NATIVE</Text>
      <Image source={require('./assets/wave.png')}></Image>
      <Saludo></Saludo>
      <Saludo2></Saludo2>
      
      
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