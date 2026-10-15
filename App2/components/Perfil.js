import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const Perfil = () => {
  return (
    <View style={styles.perfilContainer}>
      <Text style={styles.texto}>Nombre: Karla María Cruz Villagómez Jiménez</Text>
      <Text style={styles.texto}>Carrera: Ing. en Tecnologías de la Información e Innovación Digital</Text>
      <Text style={styles.texto}>Materia: Desarrollo de Aplicaciones Móviles</Text>
      <Text style={styles.texto}>Cuatrimestre: 4to Cuatrimestre</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  perfilContainer: {
    marginVertical: 10,
    alignItems: 'center',
  },
  texto: {
    fontSize: 14,
    color: '#333',
    marginBottom: 2,
  },
});