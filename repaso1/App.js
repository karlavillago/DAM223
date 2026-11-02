/* 1. ZONA DE IMPORTACIONES */
import { useState } from 'react';

import {
  StyleSheet,
  View,
  Text,
  TextInput,
  ScrollView,
  Switch,
  Alert,
  Pressable
} from 'react-native';

/* 2. ZONA DEL MAIN / EJECUCION */
export default function App() {

  const [taller, setTaller] = useState(false);
  const [constancia, setConstancia] = useState(false);
  const [deportes, setDeportes] = useState(false);

  const [nombre, setNombre] = useState('');
  const [carrera, setCarrera] = useState('');
  const [semestre, setSemestre] = useState('');

  const enviarRegistro = () => {

    if (
      nombre.trim() === '' ||
      carrera.trim() === '' ||
      semestre.trim() === ''
    ) {
      Alert.alert(
        'Campos vacíos',
        'Por favor, completa todos los campos obligatorios.'
      );
      return;
    }

    if (isNaN(Number(semestre))) {
      Alert.alert(
        'Semestre inválido',
        'Por favor, ingresa un número válido para el semestre.'
      );
      return;
    }

    Alert.alert(
      'Registro exitoso',
      'Nombre: ' + nombre +
      '\nCarrera: ' + carrera +
      '\nSemestre: ' + semestre +
      '\nTaller: ' + (taller ? 'Sí' : 'No') +
      '\nConstancia: ' + (constancia ? 'Sí' : 'No') +
      '\nDeportes: ' + (deportes ? 'Sí' : 'No')
    );

  };

  return (
    <ScrollView style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.titulo}>
          Registro de Evento Universitario
        </Text>

        <Text style={styles.subtitulo}>
          Completa tus datos para registrarte
        </Text>
      </View>

      <View style={styles.formulario}>

        <Text style={styles.encabezado}>
          Datos del participante
        </Text>

        <Text style={styles.label}>Nombre completo</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingresa tu nombre completo"
          value={nombre}
          onChangeText={setNombre}
        />

        <Text style={styles.label}>Carrera</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingresa tu carrera"
          value={carrera}
          onChangeText={setCarrera}
        />

        <Text style={styles.label}>Semestre</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingresa tu semestre"
          keyboardType="numeric"
          value={semestre}
          onChangeText={setSemestre}
        />

        <Text style={styles.encabezado}>
          Información del evento
        </Text>

        <View style={styles.pregunta}>
          <Text style={styles.textoPregunta}>
            ¿Asistirá al taller?
          </Text>

          <View style={styles.opcion}>
            <Text>{taller ? 'Sí' : 'No'}</Text>
            <Switch
              value={taller}
              onValueChange={setTaller}
            />
          </View>
        </View>

        <View style={styles.pregunta}>
          <Text style={styles.textoPregunta}>
            ¿Requiere constancia?
          </Text>

          <View style={styles.opcion}>
            <Text>{constancia ? 'Sí' : 'No'}</Text>
            <Switch
              value={constancia}
              onValueChange={setConstancia}
            />
          </View>
        </View>

        <View style={styles.pregunta}>
          <Text style={styles.textoPregunta}>
            ¿Participará en actividades deportivas?
          </Text>

          <View style={styles.opcion}>
            <Text>{deportes ? 'Sí' : 'No'}</Text>
            <Switch
              value={deportes}
              onValueChange={setDeportes}
            />
          </View>
        </View>

        {/* BOTON PERSONALIZADO */}
        <Pressable
          style={styles.boton}
          onPress={enviarRegistro}
        >
          <Text style={styles.textoBoton}>
            ENVIAR REGISTRO
          </Text>
        </Pressable>

      </View>

    </ScrollView>
  );
}

/* 3. ZONA DE LA ESTETICA */
const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F4F7F5',
  },

  header: {
    backgroundColor: '#1A3D1A',
    padding: 25,
    paddingTop: 55,
    paddingBottom: 35,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },

  titulo: {
    color: '#FFFFFF',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  subtitulo: {
    color: '#DCE8DC',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 10,
  },

  formulario: {
    backgroundColor: '#FFFFFF',
    margin: 20,
    padding: 20,
    borderRadius: 18,
  },

  encabezado: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1A3D1A',
    marginBottom: 20,
    marginTop: 10,
  },

  label: {
    fontSize: 15,
    fontWeight: '600',
    color: '#333333',
    marginBottom: 8,
  },

  input: {
    backgroundColor: '#F4F7F5',
    borderWidth: 1,
    borderColor: '#DCE5DC',
    borderRadius: 10,
    padding: 13,
    fontSize: 15,
    marginBottom: 18,
  },

  pregunta: {
    backgroundColor: '#F4F7F5',
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
  },

  textoPregunta: {
    fontSize: 15,
    fontWeight: '500',
    color: '#333333',
    marginBottom: 10,
  },

  opcion: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  /* ESTILOS DEL BOTON */
  boton: {
    backgroundColor: '#1A3D1A',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },

  textoBoton: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },

});