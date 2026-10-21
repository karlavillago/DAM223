import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Perfil } from './components/Perfil';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>Flexbox - Row (Horizontal)</Text>

      {['flex-start', 'center', 'flex-end', 'space-between', 'space-around', 'space-evenly'].map((forma) => (
        <View key={forma} style={styles.ejemplo}>
          <Text>{forma}</Text>

          <View style={[styles.fila, { justifyContent: forma }]}>
            <Perfil nombre="Maricruz" carrera="TIID" materia="Movil" cuatri="Cuarto cuatrimestre" style={styles.tarjeta1} />
            <Perfil nombre="Juan" carrera="Mecatronica" materia="Circuitos" cuatri="Cuarto cuatrimestre" style={styles.tarjeta2} />
            <Perfil nombre="Paul" carrera="TIID" materia="Movil" cuatri="Cuarto cuatrimestre" style={styles.tarjeta3} />
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 15,
  },
  ejemplo: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 15,
  },
  fila: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
  },
  tarjeta1: {},
  tarjeta2: {},
  tarjeta3: {},
});