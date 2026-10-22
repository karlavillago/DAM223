/* 1.ZONA DE IMPORTACIONES */
import { StyleSheet, View } from 'react-native';
import  MenuScreen  from './screens/MenuScreen';
/* 2.ZONA DEL MAIN(COMPONENTES, SCREENS) / EJECUCION*/
export default function App() {
  return (
    <View style={styles.container}>
 
    <MenuScreen/>
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
  
});