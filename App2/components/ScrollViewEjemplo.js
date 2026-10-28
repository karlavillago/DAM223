  import { useState} from 'react';
  import { StyleSheet,View, Text,Button,ScrollView } from 'react-native';
  
  export default function ScrollViewEjemplo(){
    const [desplazar,setDesplazar] = useState(true);
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}> Ejemplo de scrollview</Text>
        <Button 
        title={ desplazar ? 'desactivar desplazamiento': 'activar desplazamiento'}
        onPress={()=>setDesplazar(!desplazar)}
        />
        <ScrollView
        style={styles.lista}
        contentContainerStyle={styles.contenido}
        showsVerticalScrollIndicator={true}
        scrollEnabled={desplazar}
        
        >
         <View style={styles.tarjeta1}><Text>Tarjeta 1</Text></View>
         <View style={styles.tarjeta2}><Text>Tarjeta 2</Text></View>
         <View style={styles.tarjeta3}><Text>Tarjeta 3</Text></View>
         <View style={styles.tarjeta4}><Text>Tarjeta 4</Text></View>
         <View style={styles.tarjeta5}><Text>Tarjeta 5</Text></View>
        </ScrollView>
      </View>

    );
  }


  const styles =StyleSheet.create({
    container:{
      padding: 10,
      backgroundColor: '#fff',
    },
    titulo: {
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 10,
    },
    lista: {
      height: 200,
      flexGrow: 0,
      marginTop: 10,
    },
    contenido:{
      paddingBottom: 20,
    },
    tarjeta1: {backgroundColor: 'pink', padding: 25, marginBottom: 10, borderRadius: 8},
    tarjeta2: {backgroundColor: 'violet', padding: 25, marginBottom: 10, borderRadius: 8},
    tarjeta3: {backgroundColor: 'azure', padding: 25, marginBottom: 10, borderRadius: 8},
    tarjeta4: {backgroundColor: 'lightblue', padding: 25, marginBottom: 10, borderRadius: 8},
    tarjeta5: {backgroundColor: 'lightgreen', padding: 25, marginBottom: 10, borderRadius: 8},
  });