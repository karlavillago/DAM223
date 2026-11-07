import React, { useState, useEffect } from 'react';

import {
  View,
  Text,
  TextInput,
  Pressable,
  ImageBackground,
  ActivityIndicator,
  FlatList,
  Alert,
  StyleSheet
} from 'react-native';

export default function App() {

  // 1. ESTADOS
  const [pantalla, setPantalla] = useState(true);
  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [genero, setGenero] = useState('');
  const [libros, setLibros] = useState([]);
  const [cargando, setCargando] = useState(false);

  // 2. SPLASH SCREEN
  useEffect(() => {
    const tiempo = setTimeout(() => {
      setPantalla(false);
    }, 2000);

    return () => clearTimeout(tiempo);
  }, []);

  // 3. AGREGAR LIBRO
  const agregarLibro = () => {

    if (
      titulo.trim() === '' ||
      autor.trim() === '' ||
      genero.trim() === ''
    ) {
      Alert.alert(
        'Campos vacíos',
        'Completa todos los campos.'
      );
      return;
    }

    setCargando(true);

    setTimeout(() => {

      const nuevoLibro = {
        id: Date.now().toString(),
        titulo: titulo,
        autor: autor,
        genero: genero
      };

      setLibros((lista) => [...lista, nuevoLibro]);

      setTitulo('');
      setAutor('');
      setGenero('');

      setCargando(false);

      Alert.alert(
        'Libro agregado',
        'Tu libro se registró correctamente.'
      );

    }, 4000);
  };

  // 4. PANTALLA DE BIENVENIDA
  if (pantalla) {
    return (
      <ImageBackground
        source={{
          uri: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800'
        }}
        style={styles.fondo}
      >
        <View style={styles.splash}>

          <Text style={styles.emoji}>📚</Text>

          <Text style={styles.tituloSplash}>
            Registro de Libros
          </Text>

          <Text style={styles.subtituloSplash}>
            Mis libros favoritos
          </Text>

          <ActivityIndicator
            size="large"
            color="#FFFFFF"
          />

          <Text style={styles.textoBlanco}>
            Bienvenido...
          </Text>

        </View>
      </ImageBackground>
    );
  }

  // 5. PANTALLA PRINCIPAL
  return (
    <ImageBackground
      source={{
        uri: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800'
      }}
      style={styles.fondo}
    >

      <View style={styles.contenedor}>

        <Text style={styles.encabezado}>
          📚 Registro de Libros
        </Text>

        <Text style={styles.subtitulo}>
          Registra tus libros favoritos
        </Text>

        {/* FORMULARIO */}

        <View style={styles.formulario}>

          <Text style={styles.etiqueta}>
            Título del libro
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Ej. El principito"
            value={titulo}
            onChangeText={setTitulo}
          />

          <Text style={styles.etiqueta}>
            Autor
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Ej. Antoine de Saint-Exupéry"
            value={autor}
            onChangeText={setAutor}
          />

          <Text style={styles.etiqueta}>
            Género
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Ej. Fantasía"
            value={genero}
            onChangeText={setGenero}
          />

          {/* BOTÓN PRESSABLE */}

          <Pressable
            style={styles.boton}
            onPress={agregarLibro}
            disabled={cargando}
          >
            <Text style={styles.textoBoton}>
              {cargando ? 'Guardando...' : '＋ Agregar libro'}
            </Text>
          </Pressable>

          {/* ACTIVITY INDICATOR */}

          {cargando && (
            <View style={styles.carga}>
              <ActivityIndicator
                size="large"
                color="#2E7D32"
              />

              <Text style={styles.textoCarga}>
                Guardando libro...
              </Text>
            </View>
          )}

        </View>

        {/* LISTA DE LIBROS */}

        <Text style={styles.tituloLista}>
          📖 Mis libros ({libros.length})
        </Text>

        <FlatList
          data={libros}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (

            <View style={styles.tarjeta}>

              <Text style={styles.libro}>
                📘 {item.titulo}
              </Text>

              <Text style={styles.detalle}>
                Autor: {item.autor}
              </Text>

              <Text style={styles.detalle}>
                Género: {item.genero}
              </Text>

            </View>

          )}
          ListEmptyComponent={
            <Text style={styles.vacio}>
              Aún no tienes libros registrados.
            </Text>
          }
        />

      </View>

    </ImageBackground>
  );
}

// 6. ESTILOS
const styles = StyleSheet.create({

  fondo: {
    flex: 1,
  },

  splash: {
    flex: 1,
    backgroundColor: 'rgba(20,70,35,0.85)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  emoji: {
    fontSize: 70,
    marginBottom: 15,
  },

  tituloSplash: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
  },

  subtituloSplash: {
    fontSize: 18,
    color: '#E8F5E9',
    marginBottom: 30,
  },

  textoBlanco: {
    color: '#FFFFFF',
    marginTop: 15,
  },

  contenedor: {
    flex: 1,
    backgroundColor: 'rgba(245,250,245,0.95)',
    padding: 20,
    paddingTop: 45,
  },

  encabezado: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#1B5E20',
    textAlign: 'center',
  },

  subtitulo: {
    textAlign: 'center',
    color: '#666666',
    marginBottom: 20,
    marginTop: 5,
  },

  formulario: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 15,
    elevation: 4,
  },

  etiqueta: {
    fontWeight: 'bold',
    color: '#2E7D32',
    marginBottom: 5,
  },

  input: {
    borderWidth: 1,
    borderColor: '#C8E6C9',
    borderRadius: 10,
    padding: 12,
    marginBottom: 12,
    backgroundColor: '#F9FFF9',
  },

  boton: {
    backgroundColor: '#2E7D32',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },

  textoBoton: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },

  carga: {
    alignItems: 'center',
    marginTop: 15,
  },

  textoCarga: {
    color: '#2E7D32',
    marginTop: 5,
  },

  tituloLista: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#1B5E20',
    marginTop: 20,
    marginBottom: 10,
  },

  tarjeta: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    marginBottom: 12,
    borderRadius: 12,
    borderLeftWidth: 5,
    borderLeftColor: '#43A047',
    elevation: 3,
  },

  libro: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1B5E20',
  },

  detalle: {
    color: '#555555',
    marginTop: 5,
  },

  vacio: {
    textAlign: 'center',
    color: '#777777',
    marginTop: 15,
  },

});