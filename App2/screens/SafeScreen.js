import { StyleSheet, Text, View } from 'react-native';


export default function SafeScreen() {
  return (
    <View style={styles.safeScreen}>
  <text>Aqui va la practica 10</text>
  <text>Equipo Dulce</text>
  
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
});