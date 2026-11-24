import { useState} from 'react';
import {styleSheet,View,Text,Button,Modal,TouchableOpacity} from 'react-native'

const opciones =['compartir', 'Editar', 'Eliminar']
export default function ModalBottomScreen() {
  const [modal,setModal] = useState(null);
  const [mensaje,setMensaje] = useState('seleccionar una opcion');

  const elegirOpcion = (opcion) => {
    setMensaje('opcion): ${opcion}');
    setModal(null);
  }; 
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Practica Modal y Button</Text>
      <text style={styles.text}>Estado actual:{mensaje}</text>

      <view style={styles.buttons}>
        <Button 
        title='Abrir Modal'
        onPress={() => setModal('confirmacion')}
        color='#5856D6'
        />

        <Button 
        title='Opciones de perfil'
        onPress={() => setModal('opciones')}
        color='#43C621'
        />

        <view> </view>
        <Modal
        visible={modal === 'confirmacion'}
        animationType='fade'
        transparent
        onRequestClose={() => setModal(null)}
        ><Modal
        <View style={styles.modalOverlay}></View>
        <view style={styles.modalCard}>
          <Text style={styles.title}>Eliminar elemento</Text>
          <Text style={styles.modalBody}>Esta accion no se </Text>