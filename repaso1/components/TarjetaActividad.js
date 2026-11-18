import React from 'react';
import { View, Text, Pressable, Alert, StyleSheet } from 'react-native';

export default function TarjetaActividad({ nombre, descripcion }) {
  const manejarPresion = () => {
    Alert.alert("Actividad seleccionada", nombre);
  };

  return (
    <View style={styles.card}>
      <Text style={styles.nombre}>{nombre}</Text>
      <Text style={styles.descripcion}>{descripcion}</Text>
      
      <Pressable style={styles.boton} onPress={manejarPresion}>
        <Text style={styles.textoBoton}>Ver actividad</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 8,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  nombre: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  descripcion: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
    marginBottom: 10,
  },
  boton: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  textoBoton: {
    color: '#fff',
    fontWeight: 'bold',
  },
});