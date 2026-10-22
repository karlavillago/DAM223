import { StyleSheet, Text, View } from 'react-native';


export default function App() {
  return (
    <View style={styles.presableScreen}>
     <text>Practica 11</text>
     <text>Equipo de Karen</text>
  
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