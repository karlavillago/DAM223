import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function TextInputScreen() {
  return (
    <View style={styles.container}>
      <Text>Practica TextInput</Text>
      <TextInput
        style={styles.input}
        placeholder="Escribe algo..."
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 10,
  },
});
